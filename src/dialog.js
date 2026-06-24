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
}

export {createDialogForm}