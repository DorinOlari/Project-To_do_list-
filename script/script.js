const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
});

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Add New Task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
}
addTaskBtn.addEventListener('click', addTask);


