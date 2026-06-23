export function UIController() {
    const projectDisplay = document.querySelector('.project-display');

    function renderNewProject(projectName) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.dataset.projectName = projectName;
        project.setAttribute('title', 'Click to view project information ^-^');

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = projectName;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.setAttribute('aria-label', 'remove project');
        removeButton.setAttribute('title', 'Remove project?')
        removeButton.textContent = 'X';

        project.appendChild(projectTitle);
        project.appendChild(removeButton);
        projectDisplay.appendChild(project);
    }

    function removeProject(projectDatasetName) {
        const projectToBeDeleted = document.querySelector(`[data-project-name=${projectDatasetName}]`);
        const projectInspectionTarget = document.querySelector('.right-page p.task-navigator');
        
        if (projectInspectionTarget.textContent === projectDatasetName) {
            closeProjectInspection();
        }

        projectToBeDeleted.remove();
    }

    function closeProjectInspection() {
        const projectInspection = document.querySelector('.right-page');
        projectInspection.style.display = 'none';
    }

    function showProjectInspection(projectName) {
        // show tasks as the user adds/removes them
        // reloads when the user clicks another project while inspecting the current project
        const projectInspection = document.querySelector('.right-page');
        const nav = document.querySelector('.right-page p.task-navigator');
        nav.textContent = projectName;
        projectInspection.style.display = 'block';
    }

    return {
        renderNewProject,
        removeProject,
        showProjectInspection,
        closeProjectInspection
    }
}