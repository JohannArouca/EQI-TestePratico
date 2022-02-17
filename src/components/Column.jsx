import React from 'react'
import './Column.css'

/* Componente da área de resultados */
export default function Column(props) {

    return (
        <div className='column'>
            <div className='aporte' style={{ height: `${props.aporte/10}px` }} />
            <div className='noAporte' style={{ height: `${props.noAporte/10}px` }} />
            <span>{props.month}</span>
        </div>
    )
}