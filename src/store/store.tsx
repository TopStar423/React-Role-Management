import React, { createContext, useReducer } from 'react'
import { StateType } from 'types'
import Reducer from './reducer'

const initialState = {
    roles: [],
}

const Store: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext<{
    state: StateType
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
})

export default Store