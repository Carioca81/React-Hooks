export const initialState = {
    cart: [],
    products: [],
    user: null,
    other: '...',
    number: 0,
}


export function reducer(state, action){
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2}
        case 'multiplyBy7':
            return {...state, number: state.number * 7}
        case 'divideBy25':
            return {...state, number: state.number / 25}
        case 'turnIntoAnInteger':
            return {...state, number: parseInt(state.number)}
        case 'sumByN':
            return {...state, number: state.number + action.payload}
        default:
            return state
            
    }
}