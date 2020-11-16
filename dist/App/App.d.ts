import React from "react";
import "./App.css";
interface IAppProps {
    className?: string;
}
interface IAppState {
    formula: string;
}
export default class App extends React.Component<IAppProps, IAppState> {
    state: IAppState;
    private readonly handleFormulaChange;
    private readonly parseFormula;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=App.d.ts.map