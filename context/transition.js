import { useState, createContext, useContext } from "react";

const Context = createContext();

export function TransitionProvider({children}) {
    const [tColor, setTColor] = useState('');

    return (
        <Context.Provider value={[tColor, setTColor]}> {children} </Context.Provider>
    )
}

export function useTransitionContext() {
    return useContext(Context);
}