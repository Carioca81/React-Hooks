import React, { useReducer, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store'

    // DESAFIO UseReducer
    // CRIAR NOVAS ACTIONS:
        // MULTIPLICAR POR 7
        // DIVIDIR UM NÚMERO POR 25
        // TORNAR O NÚMERO ATUAL INTEIRO (DEVIDO À DIVISÃO POR 25)
        // PODER PASSAR UM N QUALQUER PARA SER SOMADO AO NÚMERO ATUAL




// const initialState = {
//     cart: [],
//     products: [],
//     user: null,
//     other: '...',
//     number: 5,
// }

// function reducer(state, action){
//     switch(action.type){
//         case 'number_add2':
//             return {...state, number: state.number + 2}
//         case 'multiplyBy7':
//             return {...state, number: state.number * 7}
//         case 'divideBy25':
//             return {...state, number: state.number / 25}
//         case 'turnIntoAnInteger':
//             return {...state, number: parseInt(state.number)}
//         case 'sumByN':
//             return {...state, number: state.number + action.payload}
//         default:
//             return state
            
//     }
// }

const UseReducerDesafio = props => {
    const [valor, setValor] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    const estilo = {display:'flex', flexWrap:'wrap', justifyContent: 'center'}
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer (Desafio)"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            
            <div className='center'>
                {/* {state.user ?
                    <span className='text'>{ state.user.name }</span> :
                    <span className='text'>Sem Usuário!</span>
                } */}
                <span className='text'>{state.number}</span>
                <div style={estilo}>

                    <button className='btn' onClick={ () => dispatch({type: 'number_add2'}) }>number + 2</button>

                    <button className='btn' onClick={ () => dispatch({type: 'multiplyBy7'}) }>number * 7</button>

                    <button className='btn' onClick={ () => dispatch({type: 'divideBy25'}) }>number / 25</button>

                    <button className='btn' onClick={ () => dispatch({type: 'turnIntoAnInteger'}) }>Turn into an Integer</button>


                </div>
                <div className='center' style={{border: '2px solid black', borderRadius: '15px', padding: '20px'}}>
                    <input type="number" className="input" value={valor} onChange={e => setValor(+e.target.value)}/>
                    <button className='btn' onClick={ () => dispatch({type: 'sumByN', payload: valor}) }>Sum by '{valor}'</button>
                </div>
            </div>
        </div>
    )
}





export default UseReducerDesafio






