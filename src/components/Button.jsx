import React from 'react'
import './Button.css'

export default props => 
    <button className={`button ${props.orange ? 'orange': ''}`} onClick={e => props.click}>
        {props.label}
    </button>
