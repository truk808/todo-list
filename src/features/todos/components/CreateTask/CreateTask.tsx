import styles from './CreateTask.module.css'
import {useCustomContext} from "../../../../context/useCustomContext.tsx";
import {useState} from "react";

export const CreateTask = () => {
    const [name, setName] = useState("");
    const {todo} = useCustomContext()

    const onAddTask = () => {
        setName("");
        todo.addTask(name)
    }

    return (
        <form className={styles.form}>
            <div className={styles.inputWrap}>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={styles.input}
                    type="text"
                    placeholder="Напишите новую задачу..."
                    maxLength={120}
                />
            </div>

            <button
                onClick={() => onAddTask()}
                type="button"
                className={styles.primaryButton}
            >
                Добавить
            </button>
        </form>
    );
};

