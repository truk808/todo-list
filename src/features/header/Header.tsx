import styles from './Header.module.css';
import {useCustomContext} from "../../context/useCustomContext.tsx";

export const Header = () => {
    const {todo} = useCustomContext()

    return (
        <header className={`${styles.header} container`}>
            <div className={styles.inner}>
                <div className={styles.titleWrap}>
                    <h1 className={styles.title}>My Tasks</h1>
                    <span className={styles.badge}>{todo.todo.length}</span>
                </div>
            </div>
        </header>
    );
};

