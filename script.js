let taskCounter = 0;  /* Every time someone gets a ticket (adds a task), the counter goes up by 1, ensuring each task gets a different number.*/

function addTask() { /* t’s a set of instructions that runs when we "call" it (e.g., when the user clicks the "Add" button or presses Enter).*/

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskId = 'task-' + taskCounter++;  /* Creates a unique ID for the new task*/
    const li = document.createElement('li');
    li.id = taskId;

    // the backticks `` allow us to write HTML with variables*/
    li.innerHTML = `   
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask('${taskId}')">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';  
    // Clears the input box by setting its value to an empty string.
}

function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.remove();
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});