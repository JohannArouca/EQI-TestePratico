import React, { useState } from 'react'
import './Graph.css'

import Column from '../components/Column'

/* Componente da área de resultados */
export default function Graph(props) {

    return (
        <div className='graph'>
            <h3>Projeção de Valores</h3>
            <div className='graphArea'>
                <div className='row'>
                    <span className='axis axisY'>Valor(R$)</span>
                    <div className='columns'>
                        <Column month='0' aporte={props.graphValues.comAporte[0]} noAporte={props.graphValues.semAporte[0]}/>
                        <Column month='1' aporte={props.graphValues.comAporte[1]} noAporte={props.graphValues.semAporte[1]}/>
                        <Column month='2' aporte={props.graphValues.comAporte[2]} noAporte={props.graphValues.semAporte[2]}/>
                        <Column month='3' aporte={props.graphValues.comAporte[3]} noAporte={props.graphValues.semAporte[3]}/>
                        <Column month='4' aporte={props.graphValues.comAporte[4]} noAporte={props.graphValues.semAporte[4]}/>
                        <Column month='5' aporte={props.graphValues.comAporte[5]} noAporte={props.graphValues.semAporte[5]}/>
                        <Column month='6' aporte={props.graphValues.comAporte[6]} noAporte={props.graphValues.semAporte[6]}/>
                        <Column month='7' aporte={props.graphValues.comAporte[7]} noAporte={props.graphValues.semAporte[7]}/>
                        <Column month='8' aporte={props.graphValues.comAporte[8]} noAporte={props.graphValues.semAporte[8]}/>
                        <Column month='9' aporte={props.graphValues.comAporte[9]} noAporte={props.graphValues.semAporte[9]}/>
                        <Column month='10' aporte={props.graphValues.comAporte[10]} noAporte={props.graphValues.semAporte[10]}/>
                    </div>
                </div>
                <span className='axis axisX'>Tempo(meses)</span>
                <div className='legends'>
                    <div className='legend'>
                        <div className='circle orange' />
                        <span>Com aporte</span>
                    </div>
                    <div className='legend'>
                        <div className='circle' />
                        <span>Sem aporte</span>
                    </div>
                </div>
            </div>
        </div>
    )
}