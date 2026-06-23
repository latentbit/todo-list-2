class Todo {
    constructor(name, dueDate, description = undefined) {
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

    return {storage, addProject}
}

export {storageController, Todo}