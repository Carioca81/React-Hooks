import React, {useState, useRef, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// Função mesclar do desafio de UseRef proposto pelo intrutor
function mesclar(s1, s2, ativo){
    let textoNaoFormatado = s1+s2
    let arr1 = [...s1]//s1.split('')
    let arr2 = s2.split('')
    let tam = arr1.length + arr2.length
    // console.log(tam)
    let text = []
    let x = 0
    let y = 0

    for(let i = 0; i < tam; i++){
        if((ativo===0)?(i%2 === 0):(i%2 !== 0)){
            if(x < arr1.length) {
                text.push(arr1[x])
                x++
            }
        }else{
            if(y < arr2.length){
                text.push(arr2[y])
                y++
            }
        }
    }
    return text
}


const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [act, setAct] = useState(0) // criado mais um estado para implementar o desafio
    // Caso act=0 o cursor está no imput de cima e caso act=1 o cursor está no input de baixo
    // Somado a isso, se as variáveis de estado value1 e value2 estiverem vazias, significa
    // que a escrita ainda não foi iniciada e, dependendo do valor de act, a lógica da função
    // mesclar() variará pois dessa forma poderemos iniciar a escrita pelo input de cima ou o de baixo
    // que a função operará corretamente.
    // O valor de act será atualizado de acordo aom o evento onFocus programado em cada input.
    // EXELENTE SOLUÇÃO!!! PARABÉNS MARCELO!!! 
    const count = useRef(0)

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(()=>{
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(()=>{
        count.current++
        myInput1.current.focus()
    }, [value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className='center'>
                <div> 
                    <span className='text'>Valor: </span>
                    <span className='text'>{mesclar(value1, value2, act)} [</span>
                    <span className='text red'>{count.current}</span>
                    <span className='text'>]</span>
                </div>
                <input type="text"
                       className='input' 
                       ref={myInput1} 
                       value={value1} 
                       onChange={e => setValue1(e.target.value)} 
                       onFocus={_ => {if((value1==='')&&(value2==='')){setAct(0)}}}
                />
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className='center'>
                <input type='text'
                       className='input'
                       ref={myInput2}
                       value={value2}
                       onChange={e => setValue2(e.target.value)} 
                       onFocus={_ => {if((value1==='')&&(value2==='')){setAct(1)}}}
                />
            </div>
        </div>
    )
}

export default UseRef
