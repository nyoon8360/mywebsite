import { useState, createContext, useContext } from "react";

const Context = createContext();

export function TransitionYProvider({children}) {
    const [transitionY, setTransitionY] = useState(0);

    return (
        <Context.Provider value={[transitionY, setTransitionY]}> {children} </Context.Provider>
    )
}

export function useTransitionYContext() {
    return useContext(Context);
}