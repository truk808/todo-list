import { createContext, type ReactNode } from 'react';
import {useTodo} from "../features/todos/hooks/useTodo.tsx";

interface IContextValue {
    todo: ReturnType<typeof useTodo>;
}

export const Context = createContext<IContextValue | null>(null);

export  function ContextProvider({ children }: { children: ReactNode }) {
    const todo = useTodo()

    return (
        <Context.Provider value={{todo}}>
            {children}
        </Context.Provider>
    );
}