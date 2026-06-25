import { storageController, Task } from "./app.js";
import { UIController } from "./render.js";
import {createCustomTask, createCustomProject} from "./dialog.js";
import "./styles.css";

const projectPage = document.querySelector('.left-page');
const taskPage = document.querySelector('.right-page');

export let todo = storageController();
export let todoUI = UIController();

// Projects

todo.addProject('fitness');
todo.storage.fitness['Task1'] =
    new Task('10 pushups', '2026-06-26', 'Before breakfast');
todo.storage.fitness['Task2'] =
    new Task('Stretch');

todo.addProject('travel');
todo.storage.travel['Task1'] =
    new Task('Book hotel', '2026-08-01', 'Near beach');
todo.storage.travel['Task2'] =
    new Task('Pack clothes', '2026-08-10');
todo.storage.travel['Task3'] =
    new Task('Check passport');

todo.addProject('shopping');
todo.storage.shopping['Task1'] =
    new Task('Buy milk');
todo.storage.shopping['Task2'] =
    new Task('Buy milk', '2026-06-26', 'For breakfast');
    
todo.addProject('movies');
todo.storage.movies['Task1'] =
    new Task('Watch Atlas', '2026-07-01');
todo.storage.movies['Task2'] =
    new Task('Watch Atlas', '2026-07-02');

todo.addProject('ideas');
todo.storage.ideas['Task1'] =
    new Task('Build a note app');
todo.storage.ideas['Task2'] =
    new Task('Build a note app', '2027-01-01');

todo.addProject('emptyProject');

todo.addProject('weekend');
todo.storage.weekend['Task1'] =
    new Task('', '2026-06-28', '');

todo.addProject('archive');
todo.storage.archive['Task1'] =
    new Task('Old task', '2000-01-01', 'Very old date');
todo.storage.archive['Task2'] =
    new Task('Future task', '2100-01-01', 'Very future date');

todo.addProject('mixed');
todo.storage.mixed['Task1'] =
    new Task('Task with description only', undefined, 'Description');
todo.storage.mixed['Task2'] =
    new Task('Task with date only', '2026-12-31');
    
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
        todoUI.showTasksOf(todo.storage[projectName]);
    } else if (e.target.dataset.todoType === 'project') {
        createCustomProject('project');
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
        createCustomTask('task');
    } else if (e.target.classList.contains('close-project-inspection-button')) {
        todoUI.closeProjectInspection();
    }
}