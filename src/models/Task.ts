export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let nextId: number = 1;

export function createTask(title: string): Task {
    return {
        id: nextId++,
        title,
        completed: false,
    };
}
