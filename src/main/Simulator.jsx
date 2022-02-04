import React, {Component} from 'react'
import './Simulator.css'

import Title from '../components/Title'
import Input from '../components/Input'

export default class Simulator extends Component {
    render() {
        return (
            <div className='simulator'>
                <Title label="Simulador de Investimentos"/>
                <Input/>
            </div>
        )
    }
}