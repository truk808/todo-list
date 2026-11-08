import styles from './MicroTask.module.css'
import type {IMicroTask} from "../../../../type/IMicroTask.ts";
import {useCustomContext} from "../../../../context/useCustomContext.tsx";

interface MicroTaskProps {
    microTask: IMicroTask
    taskId: string;
}

export const MicroTask = ({microTask, taskId}: MicroTaskProps) => {
    const {todo} = useCustomContext()

    return (
        <div className={styles.microTask}>
            <input
                disabled={!microTask.name}
                type="checkbox"
                checked={microTask.isCompleted}
                onClick={() => todo.completeMicroTask(taskId, microTask.id)}
            />
            <input
                className={`${microTask.isCompleted && styles.taskTextCompleted}`}
                onChange={(e) => todo.changeMicroTask(taskId, microTask.id, e.target.value)}
                placeholder={'Текст микрозадания'}
                type="text"
                value={microTask.name}
            />
            <button
                onClick={() => todo.removeMicroTask(taskId, microTask.id)}
                className={styles.btnDelete}
            >
                убрать
            </button>
        </div>
    );
};
