import { storageController, Todo } from "./app.js";

let todo = storageController();

// Projects
todo.addProject('coding');
todo.addProject('school');
todo.addProject('personal');

// Coding tasks
todo.storage.coding["Finish Todo App"] = new Todo(
    "Finish Todo App",
    "2026-06-30",
    "Implement localStorage support"
);

todo.storage.coding["Fix Webpack Config"] = new Todo(
    "Fix Webpack Config",
    "2026-06-25",
    "Clean up build process"
);

// School tasks
todo.storage.school["Math Homework"] = new Todo(
    "Math Homework",
    "2026-06-24",
    "Chapter 8 exercises"
);

todo.storage.school["History Essay"] = new Todo(
    "History Essay",
    "2026-07-02",
    "Draft first version"
);

// Personal tasks
todo.storage.personal["Buy Journal"] = new Todo(
    "Buy Journal",
    "2026-06-28"
);

todo.storage.personal["Practice Piano"] = new Todo(
    "Practice Piano",
    "2026-06-24",
    "30 minutes"
);

console.log(todo.storage);