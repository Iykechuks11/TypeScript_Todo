const addButton = document.querySelector('#add-button');
const taskListElement = document.querySelector('#todo-list');
const newTaskInput = document.querySelector('#new-task');
let tasks = [];
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
function addTask(description) {
    const newTask = {
        id: tasks.length + 1,
        description,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
    newTaskInput.value = '';
}
addButton.addEventListener('click', () => {
    const newTaskDescription = newTaskInput.value.trim();
    if (newTaskDescription !== '') {
        addTask(newTaskDescription);
    }
});
renderTasks();
export {};
