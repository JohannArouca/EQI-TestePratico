import React, { useState } from 'react'
import './Input.css'

export default function Input(props) {
    const [valid, setValid] = useState(true);
    const [inputValue, setInputValue] = useState(props.inputValue);

    return (
        <div className={`input ${valid ? '' : 'red'}`}> {/* verifica se o texto do input é válido, se não for acrescenta a classe red */}
            <span>{props.span}</span>
            <input
                type="text"
                value={inputValue}
                onChange={props.change}
                onChange={(event) => {
                    const value = event.target.value;
                    setInputValue(value);
                    if (isNaN(value)) { /* verifica se o texto do input não é número */
                        setValid(false)
                    } else {
                        setValid(true)
                    }
                }}
            />
            <span className={`warning ${valid ? '' : 'visible'}`}>{`${props.spanWarning}`}</span> {/* verifica se o texto do input é válido, se não for acrescenta a classe visible */}
        </div>
    )
}