const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
});

const addTask = () => {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Add New Task');
        return;
    }

    let li = document.createElement('div');
    li.classList.add('li');
    let checkbox = document.createElement('div');
    li.append(checkbox);
    checkbox.classList.add('checkbox');
    let input = document.createElement('input');
    checkbox.append(input);
    input.setAttribute('type', 'checkbox');
    let goal_text = document.createElement('div');
    li.append(goal_text);
    goal_text.classList.add('goal_text_div');
    goal_text.textContent = taskText;
    input.addEventListener('click', () =>{
        goal_text.classList.toggle('goal_text');
    })
    taskList.append(li);
    taskInput.value = '';
    let delete_bt = document.createElement('div');
    li.append(delete_bt);
    let delete_img = document.createElement('img');
    delete_bt.append(delete_img);
    delete_img.classList.add('delete_img');
    delete_img.setAttribute('src', 'img/Delete_bt.png');
}
addTaskBtn.addEventListener('click', addTask);