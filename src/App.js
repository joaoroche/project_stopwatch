import React, { Component } from 'react';
import './style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: 0,
            timer: '',
            botao: 'Iniciar'
        }
    }


    iniciar = () => {
        let state = this.state;
        if (state.timer !== null) {
            clearInterval(state.timer)
            state.timer= null;
            state.botao = "Iniciar"
        } else {
            this.state.timer = setInterval(() => {
                state.hora += 0.1;
                this.setState(state);
            }, 100)
            state.botao = "Parar"
        }
        this.setState(state);
    }

    limpar = () => {
        let state = this.state;
        if (state.timer !== null) {
            clearInterval(state.timer)
            state.timer= null;
        }
        state.hora = 0;
        state.timer = 0;
        state.botao = ('Iniciar')
        this.setState(state)
    }


    render() {
        return (
            <div className="container">
                <img className="image" src={require('./assets/cronometro.png')} />
                <a className="timer">{this.state.hora.toFixed(1)}</a>
                <div className="areaBtn">
        <a className="botao" onClick={this.iniciar}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>
            </div>

        )
    }
}

export default App;