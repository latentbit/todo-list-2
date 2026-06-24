import { storageController, Task } from "./app.js";
import { UIController } from "./render.js";
import {createDialogForm} from "./dialog.js"
import "./styles.css";

const projectPage = document.querySelector('.left-page');
const taskPage = document.querySelector('.right-page');

let todo = storageController();
let todoUI = UIController();

// Projects

todo.addProject('coding');
todoUI.renderNewProject('coding');
todo.storage.coding['Task1'] =
    new Task('Learn DOM', '2026-06-24', 'Query selectors');
todo.storage.coding['Task2'] =
    new Task('Finish project', '2026-06-30', 'Todo app');



todo.addProject('school');
todoUI.renderNewProject('school');



todo.addProject('personal');
todoUI.renderNewProject('personal');
todo.storage.personal['Task1'] =
    new Task('Practice piano', '2026-06-24', '30 minutes');
todo.storage.personal['Task2'] =
    new Task('Go for a walk');



projectPage.addEventListener('click', projectPageEventHandler);

function projectPageEventHandler(e) {
    if (e.target.classList.contains('remove-button')) {
        const projectName = e.target.parentElement.dataset.projectName;
        todoUI.removeProject(projectName);
        todo.removeProject(projectName);
    } else if (e.target.classList.contains('project')) {
        const projectName = e.target.dataset.projectName;
        todoUI.showProjectInspection(projectName);
        todoUI.showTasksOf(todo.storage[projectName]);
    } else if (e.target.dataset.todoType === 'project') {
        createDialogForm('project');
    }
}

taskPage.addEventListener('click', taskPageEventHandler);

function taskPageEventHandler(e) {
    if (e.target.classList.contains('remove-button')) {
        const taskName = e.target.parentElement.parentElement.dataset.name;
        const projectName = document.querySelector('.right-page').dataset.inspectedProject;
        todoUI.removeTask(taskName);
        todo.removeTask(projectName, taskName);
    } else if (e.target.dataset.todoType === 'task') {
        createDialogForm('task');
    } else if (e.target.classList.contains('close-project-button')); {
        todoUI.closeProjectInspection();
    }
}