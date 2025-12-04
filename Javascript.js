const prompt = require("prompt-sync")();

let tasks = [];

function addTask() {
    let task = prompt("Enter task to add: ");
    tasks.push(task);
    console.log("Task added!");
}

function removeTask() {
    displayTasks();
    let index = parseInt(prompt("Enter task number to remove: ")) - 1;

    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task removed!");
    } else {
        console.log("Invalid task number!");
    }
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    console.log("\nYour Tasks:");
    tasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task}`);
    });
}

function clearTasks() {
    tasks = [];
    console.log("All tasks cleared!");
}

while (true) {
    console.log("\nCommands: add | remove | view | clear | exit");
    let cmd = prompt("Enter command: ").toLowerCase();

    switch (cmd) {
        case "add": addTask(); break;
        case "remove": removeTask(); break;
        case "view": displayTasks(); break;
        case "clear": clearTasks(); break;
        case "exit": console.log("Goodbye!"); process.exit();
        default: console.log("Invalid command!");
    }
}
