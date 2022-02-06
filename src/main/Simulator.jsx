import React, {Component} from 'react'
import './Simulator.css'

import Title from '../components/Title'
import Inputs from '../components/Inputs'

export default class Simulator extends Component {
    render() {
        return (
            <div className='simulator'>
                <Title label="Simulador de Investimentos"/>
                <Inputs/>
            </div>
        )
    }
}