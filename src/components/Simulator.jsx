import React, { useState } from 'react'
import './Simulator.css'

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from './Button'
import Results from './Results';


/* Componente da área do simulador */
export default function Simulator() {
    const [rendimento, setRendimento] = useState('bruto');
    const [aporteInicial, setAporteInicial] = useState('');
    const [aporteInicialValid, setAporteInicialValid] = useState(true);
    const [prazo, setPrazo] = useState('');
    const [prazoValid, setPrazoValid] = useState(true);
    const [ipca, setIpca] = useState('');
    const [indexacao, setIndexacao] = useState('pre');
    const [aporteMensal, setAporteMensal] = useState('');
    const [aporteMensalValid, setAporteMensalValid] = useState(true);
    const [rentabilidade, setRentabilidade] = useState('');
    const [rentabilidadeValid, setRentabilidadeValid] = useState(true);
    const [cdi, setCdi] = useState('');
    const [result, setResult] = useState('');
    const [resultControl, setResultControl] = useState(false);
    const [graphValues, setGraphValues] = useState('');

    /* GET para pegar os valores de IPCA e CDI */
    fetch('http://localhost:3000/indicadores')
        .then((response) => {
            response.json()
                .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].nome === 'ipca') {
                            setIpca(data[i].valor) /* seta o valor no state usado no input */
                        }
                        if (data[i].nome === 'cdi') {
                            setCdi(data[i].valor) /* seta o valor no state usado no input */
                        }
                    }
                })
        })

    /* Função do click do botão limpar campos */
    function clear() {
        setAporteInicial('')
        setPrazo('')
        setAporteMensal('')
        setRentabilidade('')
    }

    /* Função que controla se o botão simular estará desabilitado */
    function disable() {
        return !(aporteInicial && aporteInicialValid && prazo && prazoValid && aporteMensal && aporteMensalValid && rentabilidade && rentabilidadeValid) /* retorna false se todos os campos estiverem preenchidos com números, habilitando o botão*/
    }

    /* Função do click do botão simular */
    function simulate() {

        /* GET para pegar os valores de IPCA e CDI */
        fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
        .then((response) => {
            response.json()
                .then((data) => {
                    setResult([data[0].valorFinalBruto, data[0].aliquotaIR, data[0].valorPagoIR, data[0].valorFinalLiquido, data[0].valorTotalInvestido, data[0].ganhoLiquido]) /* valores mandados como props para o componente result */
                    setGraphValues(data[0].graficoValores) /* valores mandados como props para o result, que manda para o componente graph */
                    setResultControl(true) /* seta o state como true, tornando os resultados visíveis */
                })
        })
    }

    return (
        <div className='simulator'>
            <div className='inputs'>
                <h2>Simulador</h2>
                <div className='columnsSimulator'>

                    {/* Primeira coluna de inputs */}
                    <div className='columnSimulator'>
                        {/* Rendimento */}
                        <div className='input'>
                            <span>Rendimento</span>
                            <div className='options'>
                                <span className={`option bruto ${rendimento === 'bruto' ? 'selected' : ''}`} onClick={() => setRendimento('bruto')}>
                                    <FontAwesomeIcon icon={faCheck} className={`check ${rendimento === 'bruto' ? 'visible' : ''}`} />
                                    Bruto
                                </span>
                                <span className={`option liquido ${rendimento === 'liquido' ? 'selected' : ''}`} onClick={() => setRendimento('liquido')}>
                                    <FontAwesomeIcon icon={faCheck} className={`check ${rendimento === 'liquido' ? 'visible' : ''}`} />
                                    Líquido
                                </span>
                            </div>
                        </div>

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

                        {/* Input de prazo */}
                        <div className={`input ${prazoValid ? '' : 'red'}`}> {/* verifica se o texto do input é válido, se não for acrescenta a classe red */}
                            <span>Prazo (em meses)</span>
                            <input
                                type="text"
                                value={prazo}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setPrazo(value)
                                    if (isNaN(value)) { /* verifica se o texto do input não é número */
                                        setPrazoValid(false)
                                    } else {
                                        setPrazoValid(true)
                                    }
                                }}
                            />
                            <span className={`warning ${prazoValid ? '' : 'visible'}`}>Prazo deve ser um número</span> {/* verifica se o texto do input é válido, se não for acrescenta a classe visible */}
                        </div>

                        {/* Input não editável de IPCA */}
                        <div className={'input'}>
                            <span>IPCA (ao ano)</span>
                            <input
                                type="text"
                                value={`${ipca}%`}
                                disabled="disabled"
                            />
                        </div>

                        {/* Botão limpar campos */}
                        <Button click={clear} label="Limpar campos" />
                    </div>

                    {/* Segunda coluna de inputs */}
                    <div className='columnSimulator'>
                        {/* Tipos de indexação */}
                        <div className='input'>
                            <span>Tipos de Indexação</span>
                            <div className='options'>
                                <span className={`option option3 pre ${indexacao === 'pre' ? 'selected' : ''}`} onClick={() => setIndexacao('pre')}>
                                    <FontAwesomeIcon icon={faCheck} className={`check ${indexacao === 'pre' ? 'visible' : ''}`} />
                                    PRÉ
                                </span>
                                <span className={`option option3 pos ${indexacao === 'pos' ? 'selected' : ''}`} onClick={() => setIndexacao('pos')}>
                                    <FontAwesomeIcon icon={faCheck} className={`check ${indexacao === 'pos' ? 'visible' : ''}`} />
                                    POS
                                </span>
                                <span className={`option option3 fixado ${indexacao === 'ipca' ? 'selected' : ''}`} onClick={() => setIndexacao('ipca')}>
                                    <FontAwesomeIcon icon={faCheck} className={`check ${indexacao === 'ipca' ? 'visible' : ''}`} />
                                    FIXADO
                                </span>
                            </div>
                        </div>

                        {/* Input de aporte mensal */}
                        <div className={`input ${aporteMensalValid ? '' : 'red'}`}> {/* verifica se o texto do input é válido, se não for acrescenta a classe red */}
                            <span>Aporte mensal</span>
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

                        {/* Input de rentabilidade */}
                        <div className={`input ${rentabilidadeValid ? '' : 'red'}`}> {/* verifica se o texto do input é válido, se não for acrescenta a classe red */}
                            <span>Rentabilidade</span>
                            <input
                                type="text"
                                value={rentabilidade}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setRentabilidade(value)
                                    if (isNaN(value)) { /* verifica se o texto do input não é número */
                                        setRentabilidadeValid(false)
                                    } else {
                                        setRentabilidadeValid(true)
                                    }
                                }}
                            />
                            <span className={`warning ${rentabilidadeValid ? '' : 'visible'}`}>Rentabilidade deve ser um número</span> {/* verifica se o texto do input é válido, se não for acrescenta a classe visible */}
                        </div>

                        {/* Input não editável de CDI */}
                        <div className={'input'}>
                            <span>CDI (ao ano)</span>
                            <input
                                type="text"
                                value={`${cdi}%`}
                                disabled="disabled"
                            />
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
            <div className='outputs'>
                {resultControl ? <Results result={result} graphValues={graphValues}/> : ''}
            </div>
        </div>
    )
}