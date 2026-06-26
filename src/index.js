import { storageController, Task } from "./app.js";
import { UIController } from "./render.js";
import {createCustomTask, createCustomProject} from "./dialog.js";
import "./styles.css";

const projectPage = document.querySelector('.left-page');
const taskPage = document.querySelector('.right-page');

let todo = storageController();
let todoUI = UIController();

// Projects

// 1. Empty project (you already have logic for this)
todo.addProject('emptyProject');

// 2. Normal mixed tasks
todo.addProject('normalProject');
todo.storage.normalProject['Task1'] = new Task('Buy groceries', '2026-06-30', 'Milk, eggs, bread');
todo.storage.normalProject['Task2'] = new Task('Finish homework', '2026-07-02', 'Math exercises');
todo.storage.normalProject['Task3'] = new Task('Call mom', '', 'No due date task');

// 3. Overdue + urgent + future mix
todo.addProject('timeStressTest');
todo.storage.timeStressTest['Task1'] = new Task('Overdue task', '2025-01-01', 'This is already dead');
todo.storage.timeStressTest['Task2'] = new Task('Urgent task', new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], 'Due tomorrow');
todo.storage.timeStressTest['Task3'] = new Task('Upcoming task', new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], 'Due in ~10 days');
todo.storage.timeStressTest['Task4'] = new Task('Far future task', '2027-01-01', 'Relax');

// 4. Same due date collisions (sorting test)
todo.addProject('sameDateChaos');
todo.storage.sameDateChaos['A'] = new Task('Task A', '2026-07-01');
todo.storage.sameDateChaos['B'] = new Task('Task B', '2026-07-01');
todo.storage.sameDateChaos['C'] = new Task('Task C', '2026-07-01');

// 5. Missing/dirty data (this is where apps usually die)
todo.addProject('dirtyData');
todo.storage.dirtyData['X'] = new Task('', '', '');
todo.storage.dirtyData['Y'] = new Task(null, null, null);
todo.storage.dirtyData['Z'] = new Task('Weird task'); // missing fields

// 6. Long text stress test (UI overflow check)
todo.addProject('uiStress');
todo.storage.uiStress['Long'] = new Task(
  'This is a ridiculously long task name that should probably break your layout if you are not careful',
  '2026-08-15',
  'Lorem ipsum '.repeat(30)
);
    
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