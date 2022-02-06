import React, { useState } from 'react'
import './Inputs.css'

import InputMask from "react-input-mask";

/* import Input from './Input' */
import Button from './Button'


/* Componente da área de inputs */
export default function Inputs() {
    const [aporteInicial, setAporteInicial] = useState('');
    const [aporteInicialValid, setAporteInicialValid] = useState(true);
    const [aporteMensal, setAporteMensal] = useState('');
    const [aporteMensalValid, setAporteMensalValid] = useState(true);

    /* Função do click do botão limpar campos */
    function clear() {
        setAporteInicial('')
        setAporteMensal('')
    }

    /* Função que controla se o botão simular estará desabilitado */
    function disable() {
        return !(aporteInicial && aporteInicialValid && aporteMensal && aporteMensalValid) /* retorna false se todos os campos estiverem preenchidos com números, habilitando o botão*/
    }

    /* Função do click do botão simular */
    function simulate() {
        console.log("simular!")
    }

    return (
        <div className='inputs'>
            <h2>Simulador</h2>
            <div className='columns'>
                <div className='column'>
                    {/* Input do aporte inicial */}
                    {/* <Input
                        span='Aporte inicial'
                        spanWarning='Aporte deve ser um número'
                        inputValue={aporteInicial}
                    /> */}
                    {/* Input de aporte inicial */}
                    <div className={`input ${aporteInicialValid ? '' : 'red'}`}> {/* verifica se o texto do input é válido, se não for acrescenta a classe red */}
                        <span>Aporte inicial</span>
                        <input
                            type="text"
                            value={aporteInicial}
                            onChange={(event) => {
                                const value = event.target.value;
                                setAporteInicial(value)
                                if (isNaN(value)) { /* verifica se o texto do input não é número */
                                    setAporteInicialValid(false)
                                } else {
                                    setAporteInicialValid(true)
                                }
                            }}
                        />
                        <span className={`warning ${aporteInicialValid ? '' : 'visible'}`}>Aporte deve ser um número</span> {/* verifica se o texto do input é válido, se não for acrescenta a classe visible */}
                    </div>
                    
                    {/* <InputMask mask="R$999.99" /> */}

                    {/* Botão limpar campos */}
                    <Button click={clear} label="Limpar campos" />
                </div>
                <div className='column'>
                    {/* Input de aporte mensal */}
                    <div className={`input ${aporteMensalValid ? '' : 'red'}`}> {/* verifica se o texto do input é válido, se não for acrescenta a classe red */}
                        <span>Aporte inicial</span>
                        <input
                            type="text"
                            value={aporteMensal}
                            onChange={(event) => {
                                const value = event.target.value;
                                setAporteMensal(value)
                                if (isNaN(value)) { /* verifica se o texto do input não é número */
                                    setAporteMensalValid(false)
                                } else {
                                    setAporteMensalValid(true)
                                }
                            }}
                        />
                        <span className={`warning ${aporteMensalValid ? '' : 'visible'}`}>Aporte deve ser um número</span> {/* verifica se o texto do input é válido, se não for acrescenta a classe visible */}
                    </div>

                    {/* Botão simular */}
                    <Button
                        disable={disable()} /* Props que controla se o botão está desabilitado ou não */
                        click={simulate}
                        label="Simular"
                        orange
                    />
                </div>
            </div>
        </div>
    )
}