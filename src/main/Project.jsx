import React, {Component} from 'react'
import './Project.css'

import Title from '../components/Title'
import Results from '../components/Results'
import Simulator from '../components/Simulator'

export default class Project extends Component {
    render() {
        return (
            <div className='project'>
                <Title label="Simulador de Investimentos"/>
                <Simulator/>
            </div>
        )
    }
}