import { useState, createContext, useContext } from "react";

const Context = createContext();

export function TransitionProvider({children}) {
    const [transition, setTransition] = useState({
        xLocation: 0,
        yLocation: 0,
        runBefore: false
    });

    return (
        <Context.Provider value={[transition, setTransition]}> {children} </Context.Provider>
    )
}

export function useTransitionContext() {
    return useContext(Context);
}