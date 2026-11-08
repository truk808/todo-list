import type {IMicroTask} from "./IMicroTask.ts";

export interface ITask {
    id: string;
    name: string;
    description?: string;
    isCompleted: boolean;
    microTasks: IMicroTask[]
}

