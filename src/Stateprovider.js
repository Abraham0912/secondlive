import {createContext, useReducer, useContext} from 'react'

export const StateContext = createContext();

export const StateProvider = ({reducer,initialState, children})=>{
    return(
        <StateContex.Provider value={useRedicer(reducer, initialState)}>
            {children}
        </StateContex.Provider>
    )
}
export const useStateValue = ()=>useContext(StateContext)