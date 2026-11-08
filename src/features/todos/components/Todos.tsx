import styles from "./Todos.module.css";
import {CreateTask} from "./CreateTask/CreateTask.tsx";
import {FilterTask} from "./FilterTask/FilterTask.tsx";
import {Task} from "./Task/Task.tsx";
import {useCustomContext} from "../../../context/useCustomContext.tsx";
import {Celebration} from "../../celebration/Celebration.tsx";

export const Todos = () => {
    const {todo} = useCustomContext()

    return (
        <div className={styles.content}>
            <section className={styles.taskComposer}>
                <CreateTask />
                <FilterTask />
            </section>

            <div className={styles.taskList}>
                {
                    todo.todo.length !== 0?
                        todo.todo.map((task, index) => (
                            <Task key={index} task={task} index={index}/>
                        ))
                        :
                        <Celebration />
                }
            </div>
        </div>
    );
};

