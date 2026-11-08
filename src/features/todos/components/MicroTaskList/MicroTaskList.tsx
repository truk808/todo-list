import styles from "./MicroTaskList.module.css";
import type {IMicroTask} from "../../../../type/IMicroTask.ts";
import {MicroTask} from "../MicroTask/MicroTask.tsx";
import {useCustomContext} from "../../../../context/useCustomContext.tsx";

interface MicroTaskListProps {
    taskId: string;
    microTaskList: IMicroTask[];
}

export const MicroTaskList = ({microTaskList, taskId}: MicroTaskListProps) => {
    const {todo} = useCustomContext()

    return (
        <div className={styles.microTasks}>
            {
                microTaskList && microTaskList.map((microTask: IMicroTask) => (
                    <MicroTask
                        key={microTask.id}
                        taskId={taskId}
                        microTask={microTask}
                    />
                ))
            }
            <div className={styles.addMicroTaskBtn}>
                <button
                    onClick={() => todo.addMicroTask(taskId)}
                    className={styles.btn}
                >
                    добавить микро задачу +
                </button>
            </div>
        </div>
    );
};

