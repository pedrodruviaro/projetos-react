import React, { Component } from 'react'
import './App.css'
import ColorFlipper from './components/ColorFlipper'
import Botao from './components/Botao'
import novaCorHex from './funcao'

export default class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            bgcor: '#2f2f53'
        }

        this.mudacor = this.mudacor.bind(this)
    }

    mudacor(){
        const cor = novaCorHex()
        this.setState({
            bgcor: cor
        })
    }

    render() {
        return (
            <div className="App" style={{backgroundColor: this.state.bgcor}}>
                <ColorFlipper bgcor={this.state.bgcor} />
                <Botao onClick={this.mudacor} />
            </div>
        )
    }
}
