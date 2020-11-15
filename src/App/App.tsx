import React from "react"
import Button from 'tfw/view/button'
import Input from 'tfw/view/input'
import Debouncer from 'tfw/async/debouncer'
import AminoAcid from '../view/amino-acid'

import "./App.css"

interface IAppProps {
    className?: string
}
interface IAppState {
    formula: string
}

const FORMULA_PARSER_DEBOUNCING = 333

export default class App extends React.Component<IAppProps, IAppState> {
    state: IAppState = {
        formula: ""
    }

    private readonly handleFormulaChange = (formula: string) => {
        this.setState({ formula })
        this.parseFormula()
    }

    private readonly parseFormula = Debouncer(
        () => {
            const { formula} = this.state
            console.log("[App] formula = ", formula) // @FIXME: Remove this line written on 2020-11-14 at 18:00
        },
        FORMULA_PARSER_DEBOUNCING
    )

    render() {
        const { formula } = this.state
        const classes = ['App']
        if (this.props.className) classes.push(this.props.className)

        return (<div className={classes.join(' ')}>
            <section className="thm-bg1">
                <Input
                    label="Enter schema formula"
                    value={formula}
                    wide={true}
                    onChange={this.handleFormulaChange}
                />
                <p>
                    Possible atoms are <code>H</code>, <code>O</code>, 
                <code>S</code>, <code>N</code> and <code>C</code>.<br/>
                <code>:</code> means the next link is <b>double</b>,
                <code>-</code> mean it is in background and
                <code>+</code> in forground.<br/>
                <code>.</code> means all the links are full with Hydrogen.<br/>
                A loop must be enclosed in <code>[]</code>. In a loop, the first
                link modifier are for the last one that is connected to the first
                atom.
                </p>
                <AminoAcid formula={formula} />
            </section>
        </div>)
    }
}
