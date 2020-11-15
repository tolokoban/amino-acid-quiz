import { IMoleculeNode } from './types'

export default { parse }

const H_LINKS = 1
const O_LINKS = 2
const S_LINKS = 2
const N_LINKS = 3
const C_LINKS = 4

const HYDROGEN: IMoleculeNode = {
    atom: "H",
    single: true,
    position: 0,
    links: []
}

function parse(formula: string): IMoleculeNode {
    const root: IMoleculeNode = { atom: "C", single: true, position: 0, links: [] }
    const walker = new Walker(formula)
    for (let i = 0; i < C_LINKS; i++) {
        const node = eatNode(walker) ?? { ...HYDROGEN }
        if (!node.single) i++
        root.links.push(node)
    }
    return root
}

function neededLinks(atom: string) {
    switch (atom) {
        case "H": return H_LINKS
        case "O": return O_LINKS
        case "S": return S_LINKS
        case "N": return N_LINKS
        case "C": return C_LINKS
        default: return 0
    }
}

function eatNode(walker: Walker): IMoleculeNode | null {
    const atom: IMoleculeNode = { atom: "H", single: true, position: 0, links: [] }
    let links = 0
    while (true) {
        const char = walker.next()
        if (!char) return atom
        if (char === "H") return atom
        if ("OSNC".includes(char)) {
            atom.atom = char
            links = neededLinks(char) - 1
            break
        }
        if (char === "[") {
            atom.atom = "*"
            atom.links = eatCycle(walker, atom.single ? 1 : 2)
            return atom
        }
        if (char === ":") {
            atom.single = false
        }
        if (char === "+") {
            atom.position = +1
        }
        if (char === "-") {
            atom.position = -1
        }
    }
    if (!atom.single) links--
    for (let i = 0; i < links; i++) {
        const node = eatNode(walker) ?? { ...HYDROGEN }
        if (!node.single) i++
        atom.links.push(node)
    }
    return atom
}

function eatCycle(walker: Walker, reservedLinks: number): IMoleculeNode[] {
    const cycle: IMoleculeNode[] = []
    let firstElement = true
    while (true) {
        const char = walker.next()
        if (!char || char === ']') break

        walker.back()
        const node = eatCycleNode(
            walker,
            firstElement ? reservedLinks : 0
        )
        if (!node) break
        firstElement = false

        cycle.push(node)
    }
    return cycle
}

/**
 * A Node is complete whereas a CycleNode is not because it will be completed
 * with the next CycleNode in the chain.
 */
function eatCycleNode(walker: Walker, externalLinks: number): IMoleculeNode | null {
    const atom: IMoleculeNode = { atom: "H", single: true, position: 0, links: [] }
    let links = 0
    while (true) {
        const char = walker.next()
        if (!char) return atom
        if (char === "]") return null
        if (char === "H") return atom
        if ("OSNC".includes(char)) {
            atom.atom = char
            links = neededLinks(char) - 1
            break
        }
        if (char === "[") {
            atom.atom = "*"
            atom.links = eatCycle(walker, atom.single ? 1 : 2)
            return atom
        }
        if (char === ":") {
            atom.single = false
        }
        if (char === "+") {
            atom.position = +1
        }
        if (char === "-") {
            atom.position = -1
        }
    }
    if (!atom.single) links--
    links -= externalLinks
    let cursor = 0
    for (let i = 0; i < links; i++) {
        cursor = walker.cursor
        const node = eatNode(walker) ?? { ...HYDROGEN }
        if (!node.single) i++
        atom.links.push(node)
    }
    if (cursor > 0) {
        // Removing the last one because it belongs to the rest
        // of the chain.
        walker.cursor = cursor
        atom.links.pop()
    }
    return atom
}


const VALID_CHARS = ":+-HOSNC.[]"
class Walker {
    public cursor: number
    private readonly steps: number[] = []

    constructor(private readonly text: string) {
        this.cursor = 0
    }

    next(): string {
        const { text } = this
        this.steps.push(this.cursor)
        while (this.cursor < text.length) {
            const char = text.charAt(this.cursor++)
            if (VALID_CHARS.includes(char)) return char
        }

        return ""
    }

    back() {
        const { steps } = this
        if (steps.length > 0) {
            this.cursor = steps.pop() as number
        }
    }
}