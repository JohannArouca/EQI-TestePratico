import React, { useState } from 'react'
import BoxResults from './BoxResults'
import Graph from './Graph'
import './Results.css'

/* Componente da área de resultados */
export default function Results(props) {

    return (
        <div className='results'>
            <h2>Resultado da Simulação</h2>
            <div></div>
            <div className='row'>
                <BoxResults title='Valor final Bruto' value={`R$${props.result[0]}`}/>
                <BoxResults title='Alíquota do IR' value={`${props.result[1]}%`}/>
                <BoxResults title='Valor Pago em IR' value={`R$${props.result[2]}`}/>
            </div>
            <div className='row'>
                <BoxResults title='Valor Final Líquido' green value={`R$${props.result[3]}`}/>
                <BoxResults title='Valor Total Investido' value={`R$${props.result[4]}`}/>
                <BoxResults title='Ganho líquido' green value={`R$${props.result[5]}`}/>
            </div>
            <Graph graphValues={props.graphValues}/>
        </div>
    )
}