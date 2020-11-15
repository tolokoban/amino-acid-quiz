import * as React from "react"
import FormulaParser from './formula-parser'

import './amino-acid-view.css'
import { IMoleculeNode } from "./types"

// const _ = Tfw.Intl.make(require('./amino-acid-view.json'))

export interface IAminoAcidViewProps {
    className?: string
    formula: string
}

// tslint:disable-next-line: no-empty-interface
interface IAminoAcidViewState { }

export default class AminoAcidView extends React.Component<IAminoAcidViewProps, IAminoAcidViewState> {
    state: IAminoAcidViewState = {}

    render() {
        const { formula } = this.props
        const classNames = ['custom', 'view-AminoAcidView']
        if (typeof this.props.className === 'string') {
            classNames.push(this.props.className)
        }

        return <div className={classNames.join(" ")}>
            <pre>
                {stringify(FormulaParser.parse(formula))}
            </pre>
        </div>
    }
}


function stringify(node: IMoleculeNode, indent = ""): string {
    let out = `${indent}${node.single ? "-" : "="}${node.atom}`
    const subIndent = `  ${indent}`
    for (const child of node.links) {
        out += `\n${stringify(child, subIndent)}`
    }
    return out
}
