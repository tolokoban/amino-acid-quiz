import * as React from "react";
import './amino-acid-view.css';
export interface IAminoAcidViewProps {
    className?: string;
    formula: string;
}
interface IAminoAcidViewState {
}
export default class AminoAcidView extends React.Component<IAminoAcidViewProps, IAminoAcidViewState> {
    state: IAminoAcidViewState;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=amino-acid-view.d.ts.map