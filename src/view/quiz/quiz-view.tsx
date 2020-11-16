import * as React from "react"
import Data from '../../data'
import { IDataItem } from '../../data/types'
import Combo from 'tfw/view/combo'
import Icon from 'tfw/view/icon'

import './quiz-view.css'
import Button from "tfw/view/button"

// const _ = Tfw.Intl.make(require('./quiz-view.json'))

export interface IQuizViewProps {
    className?: string
}

// tslint:disable-next-line: no-empty-interface
interface IQuizViewState {
    solution: IDataItem
    candidate: IDataItem
}

export default class QuizView extends React.Component<IQuizViewProps, IQuizViewState> {
    private isCorrect = true
    state: IQuizViewState = {
        solution: randomDatasolution(),
        candidate: {
            abbrevShort: "", abbrevLong: "", desc: "", essential: "...",
            image: "", name: "", polarity: "..."
        }
    }
    private readonly candidates = makeCandidates()

    renderAtt(name: keyof IDataItem, label: string) {
        const { candidate, solution } = this.state
        const candidates = this.candidates.get(name)
        if (!candidates) return null

        const proposedValue = candidate[name]
        const correctValue = solution[name]
        if (proposedValue !== correctValue) {
            this.isCorrect = false
        }
        return <div className="attribute" key={name}>
            <Combo
                label={label}
                value={proposedValue}
                onChange={value => this.setState({
                    candidate: {
                        ...candidate,
                        [name]: value
                    }
                })}
            >
                {
                    candidates.map(value =>
                        <div key={value}>{
                            value
                        }</div>)
                }
            </Combo>
            <Icon
                content="cancel"
                pen0="E"
                className={proposedValue === correctValue ? "hide" : "show"}
            />
        </div>
    }

    private readonly handleNextClick = () => {
        this.setState({
            solution: randomDatasolution(),
            candidate: {
                abbrevShort: "", abbrevLong: "", desc: "", essential: "...",
                image: "", name: "", polarity: "..."
            }
        })
    }

    render() {
        const { solution } = this.state
        const classNames = ['custom', 'view-QuizView']
        if (typeof this.props.className === 'string') {
            classNames.push(this.props.className)
        }
        this.isCorrect = true

        return <div className={classNames.join(" ")}>
            <h1>C'est quoi cette bête ?</h1>
            <div className="formula">
                <img height={200} src={solution.image} />
            </div>
            {this.renderAtt("name", "Nom de la bête")}
            {this.renderAtt("abbrevShort", "Abbréviation (courte)")}
            {this.renderAtt("abbrevLong", "Abbréviation (longue)")}
            {this.renderAtt("desc", "Description")}
            {this.renderAtt("essential", "Essentialité")}
            {this.renderAtt("polarity", "Polarité")}
            <Button
                label="Passer au suivant"
                onClick={this.handleNextClick}
                enabled={this.isCorrect}
                wide={true}
            />
        </div>
    }
}


function randomDatasolution(): IDataItem {
    const index = Math.floor(
        Math.random() * Data.length
    )
    return Data[index]
}

function makeCandidates(): Map<string, string[]> {
    const map = new Map<string, string[]>()
    addCandidates(map, "name")
    addCandidates(map, "abbrevShort")
    addCandidates(map, "abbrevLong")
    addCandidates(map, "desc")
    addCandidates(map, "essential")
    addCandidates(map, "polarity")
    return map
}

function addCandidates(map: Map<string, string[]>, name: keyof IDataItem) {
    const set = new Set<string>()
    const values: string[] = Data.map(item => item[name])
    for (const value of values) {
        set.add(value)
    }
    const list = Array.from(set)
    list.push("...")
    list.sort()
    map.set(name, list)
}
