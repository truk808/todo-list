import { useEffect, useMemo, useState } from "react";
import type { ITaskList } from "../../../type/ITaskList.ts";
import type { ITask } from "../../../type/ITask.ts";
import { FILTER } from "../const/filter.const.ts";

const STORAGE_KEY = "todo-list-data";

export const useTodo = () => {
    const [todo, setTodo] = useState<ITaskList>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [filter, setFilter] = useState(FILTER[0]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todo));
    }, [todo]);

    const filteredTodo = useMemo(() => {
        const copiedTodo = [...todo];

        switch (filter.option) {
            case null:
                return copiedTodo;
            case "completed":
                return copiedTodo.filter((task) => task.isCompleted);
            case "working":
                return copiedTodo.filter((task) => !task.isCompleted);
            default:
                return copiedTodo;
        }
    }, [filter, todo]);

    const addTask = (name: string) => {
        const trimmedName = name.trim();

        if (!trimmedName) return;

        const newTask: ITask = {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            name: trimmedName,
            isCompleted: false,
            microTasks: [],
        };

        setTodo((prev) => [...prev, newTask]);
    };

    const removeTask = (id: string) => {
        setTodo((prev) => prev.filter((task) => task.id !== id));
    };

    const changeTask = (id: string, name: string) => {

        setTodo((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, name } : task
            )
        );
    };

    const completeTask = (id: string) => {
        setTodo((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const addMicroTask = (taskId: string) => {
        setTodo((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        microTasks: [
                            ...task.microTasks,
                            {
                                id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                                name: "",
                                isCompleted: false,
                            },
                        ],
                    }
                    : task
            )
        );
    };

    const removeMicroTask = (taskId: string, microTaskId: string) => {
        setTodo((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        microTasks: task.microTasks.filter((microTask) => microTask.id !== microTaskId),
                    }
                    : task
            )
        );
    };

    const changeMicroTask = (taskId: string, microTaskId: string, name: string) => {

        setTodo((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        microTasks: task.microTasks.map((microTask) =>
                            microTask.id === microTaskId ? { ...microTask, name } : microTask
                        ),
                    }
                    : task
            )
        );
    };

    const completeMicroTask = (taskId: string, microTaskId: string) => {
        setTodo((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        microTasks: task.microTasks.map((microTask) =>
                            microTask.id === microTaskId
                                ? { ...microTask, isCompleted: !microTask.isCompleted }
                                : microTask
                        ),
                    }
                    : task
            )
        );
    };

    return {
        todo: filteredTodo,
        filter,
        setFilter,
        setTodo,
        addTask,
        removeTask,
        changeTask,
        completeTask,
        addMicroTask,
        removeMicroTask,
        changeMicroTask,
        completeMicroTask,
    };
};