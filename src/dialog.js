const body = document.querySelector('body');

function createProjectForm() {
    return `<form id="project-creation" action="">
                <h2>New Project</h2>
                    <p>
                        <label for="project-name">Project name</label>
                        <input id="project-name" type="text" name="projectName" required autofocus>
                    </p>
                    <button type="submit">Create</button>
            </form>`
}

function createTaskForm() {
    return `<form id="task-creation" action="">
                <h2>New task</h2>
                    <p>
                        <label for="task-name">Task name</label>
                        <input id="task-name" type="text" name="taskName" required autofocus>
                    </p>
                    <p>
                        <label for="task-due-date">Task due date</label>
                        <input id="task-due-date" name="taskdueDate" type="datetime-local">
                    </p>
                    <p>
                        <label for="task-description">Task description</label>
                        <input id="task-description" name="taskDescription" type="text">
                    </p>
                    <button type="submit">Create</button>
            </form>`
}

function createDialogForm(todoType) {
    if (todoType !== 'project' && todoType !== 'task') return;

    // Removes last dialog

    if (body.querySelector('dialog') !== null) {
        body.querySelector('dialog').remove();
    }

    let todoDialog = document.createElement('dialog');
    todoDialog.setAttribute('closedby', 'any');

    if (todoType === 'project') {
        todoDialog.innerHTML = createProjectForm();
    } else if (todoType === 'task') {
        todoDialog.innerHTML = createTaskForm();
    }

    body.appendChild(todoDialog);
    todoDialog.showModal();

    return todoDialog;
}

function createCustomProject(todoControl, todoUIControl) {
    // Show the modal for project creations, 
    // Get the modal's form to handle submit events
    const dialogElement = createDialogForm('project');
    const form = dialogElement.querySelector('#project-creation');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let projectName = form.querySelector('#project-name').value;
        projectName = (isValidString(projectName)) ? projectName : 'Project';
        // Potential logic bug: If the new project's name is
        //  the same as one in the storage, override the old one.
        todoControl.addProject(projectName);
        todoUIControl.showProjects(todoControl.storage);
        dialogElement.close();
    })
}

function createCustomTask(todoControl, todoUIControl, taskClass) {
    const dialogElement = createDialogForm('task');
    const form = dialogElement.querySelector('#task-creation');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let taskName = form.querySelector('#task-name').value;
        taskName = (isValidString(taskName)) ? taskName : 'Task';

        // If the user hasn't specified a date, it will return null
        let taskDueDate = form.querySelector('#task-due-date').value;
        taskDueDate = (isValidDate(taskDueDate)) ? taskDueDate : undefined;

        let taskDescription = form.querySelector('#task-description').value;
        taskDescription = (isValidString(taskDescription)) ? taskDescription : undefined;

        let projectName = document.querySelector('.right-page .nav > .project-navigator').textContent;
        if (todoControl.storage[projectName] === undefined) return;

        todoControl.storage[projectName][taskName] = 
            new taskClass(taskName, taskDueDate, taskDescription);
        todoUIControl.showTasksOf(todoControl.storage[projectName], todoControl.getOrderedTaskList(projectName));
        dialogElement.close();
    })
}

function isValidString(value) {
    if (typeof value !== 'string') return false;
    if (value.trim() === '') return false;
    return true;
}

function isValidDate(date) {
    const dateTest = new Date(date).getTime();
    if (isNaN(dateTest)) return false;
    return true;
}

export {createCustomProject, createCustomTask}