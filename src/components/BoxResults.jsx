import React from 'react'
import './BoxResults.css'

export default function BoxResults(props) {
    
    return (
        <div className='boxResults'>
            <h3>{props.title}</h3>
            <span className={props.green ? 'green' : ''}>{props.value}</span>
        </div>
    )
}