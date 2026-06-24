class Task {
    constructor(name, dueDate = undefined, description = undefined) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
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

    return {
        storage, 
        addProject, 
        removeProject,
        removeTask
    }
}

export {storageController, Task}