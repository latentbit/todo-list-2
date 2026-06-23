export function UIController() {
    const projectDisplay = document.querySelector('.project-display');

    function renderNewProject(projectName) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.dataset.projectName = projectName;

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = projectName;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.setAttribute('aria-label', 'remove project')
        removeButton.textContent = 'X';

        project.appendChild(projectTitle);
        project.appendChild(removeButton);
        projectDisplay.appendChild(project);
    }

    function removeProject(projectDatasetName) {
        const projectToBeDeleted = document.querySelector(`[data-project-name=${projectDatasetName}]`);
        projectToBeDeleted.remove();
    }

    return {
        renderNewProject,
        removeProject
    }
}