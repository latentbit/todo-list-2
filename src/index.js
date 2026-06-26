import { storageController, Task } from "./app.js";
import { UIController } from "./render.js";
import {createCustomTask, createCustomProject} from "./dialog.js";
import "./styles.css";

const projectPage = document.querySelector('.left-page');
const taskPage = document.querySelector('.right-page');

let todo = storageController();
let todoUI = UIController();

// Projects

todo.addProject('sortEdgeCases');

todo.storage.sortEdgeCases['Task1'] =
    new Task('Same date A', '2026-07-01');

todo.storage.sortEdgeCases['Task2'] =
    new Task('Same date B', '2026-07-01');

todo.storage.sortEdgeCases['Task3'] =
    new Task('Same date C', '2026-07-01');

todo.storage.sortEdgeCases['Task4'] =
    new Task('No deadline A');

todo.storage.sortEdgeCases['Task5'] =
    new Task('No deadline B');

todo.storage.sortEdgeCases['Task6'] =
    new Task('Past task', '2020-01-01');

todo.storage.sortEdgeCases['Task7'] =
    new Task('Future task', '2100-01-01');

todo.storage.sortEdgeCases['Task8'] =
    new Task('Tomorrow', '2026-06-27');

todo.storage.sortEdgeCases['Task9'] =
    new Task('Today', '2026-06-26');
    
todoUI.showProjects(todo.storage);

projectPage.addEventListener('click', projectPageEventHandler);

function projectPageEventHandler(e) {
    if (e.target.classList.contains('remove-button')) {
        const projectName = e.target.parentElement.dataset.projectName;
        todo.removeProject(projectName);
        todoUI.showProjects(todo.storage);
    } else if (e.target.classList.contains('project')) {
        const projectName = e.target.dataset.projectName;
        todoUI.showProjectInspection(projectName);
        todoUI.showTasksOf(todo.storage[projectName], todo.getOrderedTaskList([projectName]));
    } else if (e.target.dataset.todoType === 'project') {
        createCustomProject(todo, todoUI);
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
        createCustomTask(todo, todoUI, Task);
    } else if (e.target.classList.contains('close-project-inspection-button')) {
        todoUI.closeProjectInspection();
    }
}

todo.getOrderedTaskList('sortEdgeCases');