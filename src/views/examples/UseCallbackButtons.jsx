import React,{useCallback} from "react";

const UseCallbackButtons = props => {
    console.log('render...')
    return (
        <div>
            <button className='btn' onClick={() => props.inc(6)}>+6</button>
            <button className='btn' onClick={() => props.inc(12)}>+12</button>
            <button className='btn' onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)

// A técnica useCallback é utilizada quando necessitamos passar para um subcomponente uma função que
// não sofre alteração. Ou seja, sempre será a mesma. Dessa forma este subcomponente somente será
// renderizado uma única vez, na primeira exibição da página.
// No entanto, useCallback deve ser usado juntamente com a função "React.memo()" na exportação do subcomponente
// para o componente pricipal.