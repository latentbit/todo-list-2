import { storageController, Todo } from "./app.js";
import { UIController } from "./render.js";
import "./styles.css";

const projectDisplay = document.querySelector('.project-display');

let todo = storageController();
let todoUI = UIController();

// Projects
todo.addProject('coding');
todoUI.renderNewProject('coding');

todo.addProject('school');
todoUI.renderNewProject('school');

todo.addProject('fitness');
todoUI.renderNewProject('fitness');

todo.addProject('reading');
todoUI.renderNewProject('reading');

todo.addProject('web-dev');
todoUI.renderNewProject('web-dev');

todo.addProject('personal');
todoUI.renderNewProject('personal');

projectDisplay.addEventListener('click', projectEventHandler);

function projectEventHandler(e) {
    if (e.target.classList.contains('remove-button')) {
        const projectName = e.target.parentElement.dataset.projectName;
        todoUI.removeProject(projectName);
        todo.removeProject(projectName);
        console.log(todo.storage);
    } else if (e.target.classList.contains('project')) {
        console.log(e.target.dataset.projectName)
    }
}