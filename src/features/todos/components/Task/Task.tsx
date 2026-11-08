import styles from './Task.module.css'
import type {ITask} from "../../../../type/ITask.ts";
import {GlobalSvg} from "../../../../components/GlobalSvg.tsx";
import {MicroTaskList} from "../MicroTaskList/MicroTaskList.tsx";
import {useState} from "react";
import {useCustomContext} from "../../../../context/useCustomContext.tsx";

interface TaskProps {
    index: number;
    task: ITask;
}

export const Task = ({task}: TaskProps) => {
    const {todo} = useCustomContext()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.taskItem}>
            <div className={styles.taskItemTop}>
                <div>
                    <button
                        onClick={() => setIsOpen(prevState => !prevState)}
                        className={`${styles.arrow} ${isOpen && styles.active}`}
                    >
                        <GlobalSvg name={'arrow_down'}/>
                    </button>
                </div>
                <div className={styles.taskMain}>
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => todo.completeTask(task.id)}
                        className={`${styles.checkbox} ${task}`}
                    />
                    <input
                        type={'text'}
                        className={`${styles.taskText} ${task.isCompleted && styles.taskTextCompleted}`}
                        value={task.name}
                        onChange={(e) => {todo.changeTask(task.id, e.target.value)}}
                    />
                </div>

                <button
                    onClick={() => todo.removeTask(task.id)}
                    type="button"
                    className={styles.deleteButton}
                    aria-label="Удалить задачу"
                >
                    <GlobalSvg name={'trash'}/>
                </button>
            </div>
            {
                isOpen && (
                    <MicroTaskList
                        microTaskList={task.microTasks}
                        taskId={task.id}
                    />
                )
            }
        </div>
    );
};

