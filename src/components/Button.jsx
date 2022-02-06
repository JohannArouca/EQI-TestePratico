import React from 'react'
import './Button.css'

export default props => 
    <button className={`button ${props.orange ? 'orange': ''}`} disabled={props.disable} onClick={props.click}>
        {props.label}
    </button>
