import {useContext} from "react";
import {Context} from "./Provider.tsx";

export function useCustomContext() {
    const context = useContext(Context);

    if (!context) {
        throw new Error('useCustomContext должен использоваться внутри ContextProvider');
    }

    return context;
}