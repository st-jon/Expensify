import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(decrementCount())

store.dispatch(setCount({ count: 101 }))

unsubscribe()


// ES6 object destructuring

const book = {
    title: 'Ego is the ennemy',
    author: 'Ryan Holliday',
    publisher: {
        name:'Penguin'
    }
}

const { name: publisherName = 'self-published' } = book.publisher

console.log(publisherName)

// ES6 Array Destructuring

const menu = ['coffee', '$2', '$2.5', '$3']
const [item, , mediumPrice] = menu
console.log(`A medium ${item} costs ${mediumPrice}.`)