// // Define a Task interface to represent the structure of a task
import { Task } from "./task_structure";

// Define a Task interface to represent the structure of a task
// interface Task {
//     id: number;
//     description: string;
//     completed: boolean;
//   }

// Reference to the HTML elements
const addButton = document.querySelector('#add-button') as HTMLButtonElement;
const taskListElement = document.querySelector('#todo-list') as HTMLUListElement;
const newTaskInput = document.querySelector('#new-task') as HTMLInputElement;

// Array to store the tasks
let tasks: Task[] = [];

// Function to render tasks in the HTML
function renderTasks() {
    taskListElement.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = `todo-item ${task.completed ? 'completed' : ''}`;
        listItem.innerHTML =
            `
            <span>${task.description}</span>
            <button>Complete</button>
            <button>Remove</button>
            `;
        taskListElement.appendChild(listItem);
    });
}

// Function to add a new task
function addTask(description: string) {
    const newTask: Task = {
        id: tasks.length + 1,
        description,
        completed: false
    }

    tasks.push(newTask);
    renderTasks();
    newTaskInput.value = ''; // Clear Input Value
}

// Function to remove a task
// function removeTask(taskId: number) {
//     tasks = tasks.filter(task => task.id !== taskId);
//     renderTasks();
// }



// Function to complete a task
// function completeTask(taskId: number) {
//     const taskIndex = tasks.findIndex(task => task.id === taskId);

//     if (taskIndex !== -1) {
//         tasks[taskIndex].completed = !tasks[taskIndex].completed;
//         renderTasks();
//     }
// }

// Event listener for the "Add" button
addButton.addEventListener('click', () => {
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription !== '') {
        addTask(newTaskDescription);
    }
})

renderTasks();

// Define a Task interface to represent the structure of a task
// interface Task {
//     id: number;
//     description: string;
//     completed: boolean;
//   }

// / Get references to HTML elements
// const todoListElement = document.getElementById('todo-list') as HTMLUListElement;
// const newTaskInput = document.getElementById('new-task') as HTMLInputElement;
// const addButton = document.getElementById('add-button') as HTMLButtonElement;

// // Array to store tasks
// let tasks: Task[] = [];

// // Function to render tasks in the HTML
// function renderTasks() {
//   todoListElement.innerHTML = '';

//   tasks.forEach(task => {
//     const listItem = document.createElement('li');
//     listItem.className = `todo-item ${task.completed ? 'completed' : ''}`;
//     listItem.innerHTML = `
//       <span>${task.description}</span>
//       <button onclick="completeTask(${task.id})">Complete</button>
//       <button onclick="removeTask(${task.id})">Remove</button>
//     `;
//     todoListElement.appendChild(listItem);
//   });
// }

// // Function to add a new task
// function addTask(description: string) {
//   const newTask: Task = {
//     id: tasks.length + 1,
//     description,
//     completed: false,
//   };

//   tasks.push(newTask);
//   renderTasks();
//   newTaskInput.value = ''; // Clear the input field
// }

// // Function to remove a task
// function removeTask(taskId: number) {
//   tasks = tasks.filter(task => task.id !== taskId);
//   renderTasks();
// }

// // Function to complete a task
// function completeTask(taskId: number) {
//   const taskIndex = tasks.findIndex(task => task.id === taskId);

//   if (taskIndex !== -1) {
//     tasks[taskIndex].completed = !tasks[taskIndex].completed;
//     renderTasks();
//   }
// }

// // Event listener for the "Add" button
// addButton.addEventListener('click', () => {
//   const newTaskDescription = newTaskInput.value.trim();

//   if (newTaskDescription !== '') {
//     addTask(newTaskDescription);
//   }
// });

// // Initial rendering of tasks
// renderTasks();