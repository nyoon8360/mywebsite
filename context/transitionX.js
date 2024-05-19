import { useState, createContext, useContext } from "react";

const Context = createContext();

export function TransitionXProvider({children}) {
    const [transitionX, setTransitionX] = useState(0);

    return (
        <Context.Provider value={[transitionX, setTransitionX]}> {children} </Context.Provider>
    )
}

export function useTransitionXContext() {
    return useContext(Context);
}