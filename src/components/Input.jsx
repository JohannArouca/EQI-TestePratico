import React from 'react'
import './Input.css'

import Button from '../components/Button'

export default props => 
    <div className='input'>
        <h2>Simulador</h2>
        <Button label="Limpar campos"/>
        <Button label="Simular" orange/>
    </div>
