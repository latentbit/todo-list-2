function isValidString(value) {
    if (typeof value !== 'string') return false;
    if (value.trim() === '') return false;
    return true;
}

function isValidDateString(dateString) {
    if (typeof dateString !== 'string') return false;
    const dateTest = new Date(dateString).getTime();
    if (isNaN(dateTest)) return false;
    return true;
}

class Task {
    constructor(name, dueDate = undefined, description = undefined) {
        this.name = isValidString(name) ? name : 'Task';
        this.dueDate = isValidDateString(dueDate) ? dueDate : undefined;
        this.description = isValidString(description) ? description : undefined;
    }
}

function storageController() {
    let storage = {};

    function addProject(name) {
        storage[name] = {};
    }

    function removeProject(projectName) {
        delete storage[projectName];
    }

    function removeTask(projectName, taskName) {
        delete storage[projectName][taskName];
    }

    function getOrderedTaskList(projectName) {
        let project = storage[projectName];
        let tasks = Object.keys(project);

        tasks.sort( (taskA, taskB) => {
            const dueDateA = new Date(project[taskA].dueDate || '');
            const dueDateB = new Date(project[taskB].dueDate || '');

            if (isNaN(dueDateA.getTime()) && isNaN(dueDateB.getTime()) ) return 0;
            if ( isNaN(dueDateA.getTime()) ) return 1;
            if ( isNaN(dueDateB.getTime()) ) return -1;

            return dueDateA - dueDateB;
        })

        return tasks;
    }

    return {
        storage, 
        addProject, 
        removeProject,
        removeTask,
        getOrderedTaskList
    }
}

export {storageController, Task}