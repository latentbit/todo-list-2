export function UIController() {
    const projectDisplay = document.querySelector('.project-display');
    const projectInspection = document.querySelector('.right-page');
    const taskDisplay = projectInspection.querySelector('.task-display');
    const projectInspectionTarget = document.querySelector('.right-page p.project-navigator');

    function showProjects(storage) {
        projectDisplay.innerHTML = '';
        //This function is only activated when the user clicks a project UI, 
        //so the storage always have at least one project.
        for (let project in storage) {
            if (storage.propertyIsEnumerable(project)) {
                const projectUI = document.createElement('div');
                projectUI.classList.add('project');
                // The dataset is for the project inspection target to use
                projectUI.dataset.projectName = project;
                projectUI.setAttribute('title', 'Click to view project information ^-^');

                const projectTitle = document.createElement('h2');
                projectTitle.textContent = project;

                const removeButton = document.createElement('button');
                removeButton.classList.add('remove-button');
                removeButton.setAttribute('aria-label', 'remove project');
                removeButton.setAttribute('title', 'Remove project?')
                removeButton.textContent = 'X';

                projectUI.appendChild(projectTitle);
                projectUI.appendChild(removeButton);
                projectDisplay.appendChild(projectUI);
            }
        }
        // This one assume the underlying data has been updated before the UI
        if (storage[projectInspectionTarget.textContent] === undefined) {
            closeProjectInspection();
        }
    }

    function closeProjectInspection() {
        projectInspection.style.display = 'none';
    }

    function showProjectInspection(projectName) {
        // show tasks as the user adds/removes them
        // reloads when the user clicks another project while inspecting the current project
        projectInspection.dataset.inspectedProject = projectName;
        projectInspectionTarget.textContent = projectName;
        projectInspection.style.display = 'block';
    }

    function showTasksOf(projectObject, orderedProjectArray) {
        if (Object.keys(projectObject).length === 0) {
            taskDisplay.innerHTML = '';
            const p = document.createElement('p');
            p.textContent = 'Wooop.. No tasks yet!';
            p.style.textAlign = 'center';
            taskDisplay.appendChild(p);
        } else {
            taskDisplay.innerHTML = '';
            for (let task of orderedProjectArray) {
                const taskName = projectObject[task].name || 'Task';
                const taskDueDate = projectObject[task].dueDate || 'No due date.';
                const taskDescription = projectObject[task].description || '';

                const taskUI = document.createElement('div');
                taskUI.classList.add('task');
                taskUI.dataset.name = task;
                taskUI.innerHTML = 
                    `<div>
                        <p class="task-name"></p>
                        <p class="task-due-date"></p>
                        <button class="remove-button" aria-label="remove task">X</button>
                    </div>
                    <p class="task-description"></p>`;

                const taskNameUI = taskUI.querySelector('.task-name');
                const taskDueDateUI = taskUI.querySelector('.task-due-date');
                const taskDescriptionUI = taskUI.querySelector('.task-description');

                taskNameUI.textContent = taskName;
                taskDueDateUI.textContent = taskDueDate;
                taskDescriptionUI.textContent = taskDescription;
                
                taskDisplay.appendChild(taskUI);
            }
        }
        
    }

    function removeTask(taskName) {
        const taskToBeDeleted = taskDisplay.querySelector(`[data-name=${taskName}]`);
        taskToBeDeleted.remove();
    }

    return {
        showProjects,
        showProjectInspection,
        closeProjectInspection,
        showTasksOf,
        removeTask
    }
}