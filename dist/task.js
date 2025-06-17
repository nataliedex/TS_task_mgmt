let nextId = 1;
export function createTask(title) {
    return {
        id: nextId++,
        title,
        completed: false,
    };
}
