import React, {useState, useRef, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function mesclar(s1, s2){
    let textoNaoFormatado = s1+s2
    let arr1 = s1.split('')
    let arr2 = s2.split('')
    let tam = arr1.length + arr2.length
    // console.log(tam)
    let text = []
    let x = 0
    let y = 0

    for(let i = 0; i < tam; i++){
        if(i%2 === 0){
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
                    <span className='text'>{mesclar(value1, value2)} [</span>
                    <span className='text red'>{count.current}</span>
                    <span className='text'>]</span>
                </div>
                <input type="text" className='input' ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className='center'>
                <input type='text' className='input' ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
