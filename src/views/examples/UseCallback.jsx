import React,{useCallback, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)


    const inc = useCallback(delta => setCount(curr => curr + delta),[setCount])


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className='center'>
                <span className='text'>{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback

// A técnica useCallback é utilizada quando necessitamos passar para um subcomponente uma função que
// não sofre alteração. Ou seja, sempre será a mesma. Dessa forma este subcomponente somente será
// renderizado uma única vez, na primeira exibição da página.
// No entanto, useCallback deve ser usado juntamente com a função "React.memo()" na exportação do subcomponente
// para o componente pricipal.


