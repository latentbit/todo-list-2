import { storageController, Todo } from "./app.js";
import { UIController } from "./render.js";
import "./styles.css";

const projectDisplay = document.querySelector('.project-display');
const closeProjectInspectionButton = document.querySelector('.close-project-button');

let todo = storageController();
let todoUI = UIController();

// Projects

todo.addProject('coding');
todoUI.renderNewProject('coding');
todo.storage.coding['Task1'] =
    new Todo('Learn DOM', '2026-06-24', 'Query selectors');
todo.storage.coding['Task2'] =
    new Todo('Finish project', '2026-06-30', 'Todo app');



todo.addProject('school');
todoUI.renderNewProject('school');



todo.addProject('personal');
todoUI.renderNewProject('personal');
todo.storage.personal['Task1'] =
    new Todo('Practice piano', '2026-06-24', '30 minutes');
todo.storage.personal['Task2'] =
    new Todo('Go for a walk');



projectDisplay.addEventListener('click', projectEventHandler);

function projectEventHandler(e) {
    if (e.target.classList.contains('remove-button')) {
        const projectName = e.target.parentElement.dataset.projectName;
        todoUI.removeProject(projectName);
        todo.removeProject(projectName);
        console.log(todo.storage);
    } else if (e.target.classList.contains('project')) {
        const projectName = e.target.dataset.projectName;
        todoUI.showProjectInspection(projectName);
        todoUI.showTasksOf(todo.storage[projectName]);
    }
}

closeProjectInspectionButton.addEventListener('click', todoUI.closeProjectInspection);