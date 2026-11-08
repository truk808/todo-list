import styles from './Main.module.css';
import {Todos} from "../../features/todos/components/Todos.tsx";

export const Main = () => {
    return (
        <main className={`${styles.main} container`}>
            <Todos />
        </main>
    );
};

