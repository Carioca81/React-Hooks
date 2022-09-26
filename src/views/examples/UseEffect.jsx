import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const calcFatorial = num => {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}

const parOuImpar = (num) => {
    const n = parseInt(num)
    return ((n % 2) === 0) ? 'PAR':'ÍMPAR'
}

const UseEffect = (props) => {
    // Ex. #01
    const [numero, setNumero] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    useEffect(function(){
        setFatorial(calcFatorial(numero))
    },[numero])
    
    useEffect(()=>{
        if(fatorial > 1000000){
            document.title = 'Eita!!!'
        }
    },[fatorial])
    
    // Ex. #02
    const [parImpar, setParImpar] = useState('?')
    useEffect(()=>{
        setParImpar(parOuImpar(numero))
    },[numero])

    const divStyle = {
        marginTop: '1em',
    }

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className='center'>
                <div>
                    <span className='text'>Fatorial:</span>
                    <span className='text red'>{fatorial < 0 ?'Não existe': fatorial }</span>
                </div>
                <input type="number" className="input" value={numero} onChange={e => setNumero(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className='center'>
                <div style={divStyle}>
                    <span className='text'>O valor {numero} é</span>
                    <span className='text red'> {parImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
