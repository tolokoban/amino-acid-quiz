import * as React from "react";
import { IDataItem } from '../../data/types';
import './quiz-view.css';
export interface IQuizViewProps {
    className?: string;
}
interface IQuizViewState {
    solution: IDataItem;
    candidate: IDataItem;
}
export default class QuizView extends React.Component<IQuizViewProps, IQuizViewState> {
    private isCorrect;
    state: IQuizViewState;
    private readonly candidates;
    renderAtt(name: keyof IDataItem, label: string): JSX.Element | null;
    private readonly handleNextClick;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=quiz-view.d.ts.map