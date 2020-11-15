export interface IMoleculeNode {
    atom: string
    single: boolean
    position: number
    links: IMoleculeNode[]
}
