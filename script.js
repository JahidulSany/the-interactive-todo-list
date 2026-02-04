// Catch the DOM Elements
const inputEl = document.getElementById('floatingInput');
// console.log(inputEl);

const addTaskButton = document.getElementById('addTask');
// console.log(addTaskButton);

// Catch the All tasks div Element
const allTasksDiv = document.getElementById('allTasks');

// EventListeners
addTaskButton.addEventListener('click', handleAddTask);

function handleAddTask(e) {
  e.preventDefault();
  let taskValue = inputEl.value.trim();

  if (!taskValue) return;

  // Create the Show tasks container
  const taskContainer = document.createElement('div');

  taskContainer.classList.add(
    'd-flex',
    'justify-content-around',
    'align-items-center',
    'task-container',
  );

  // Create new DOM Elements
  const taskContent = `
        <input class="form-check-input mt-0 checkbox-task" type="checkbox" aria-label="Checkbox for following text input">
        <p class="m-0 mx-2 task-text">${taskValue}</p>
        <button type="button" class="btn btn-success delete-task">
            Delete Task
        </button>
        <button type="button" class="btn btn-success edit-task">
            Edit Task
        </button>
`;

  taskContainer.innerHTML = taskContent;

  allTasksDiv.appendChild(taskContainer);

  // Check Task Button
  const checkTaskButton = document.querySelector('.checkbox-task');

  // Delete Task Button
  const deleteTaskButton = document.querySelector('.delete-task');

  // Edit Task Button
  const editTaskButton = document.querySelector('.edit-task');

  checkTaskButton.addEventListener('click', handleCheckTaskBox);

  deleteTaskButton.addEventListener('click', handleDeleteTask);

  editTaskButton.addEventListener('click', handleEditTask);

  taskValue = '';
}

function handleCheckTaskBox(e) {
  const taskText = document.querySelector('.task-text');
  console.log(taskText);
  if (e.target.checked) {
    taskText.classList.add('text-decoration-line-through');
  } else {
    taskText.classList.replace(
      'text-decoration-line-through',
      'text-decoration-none',
    );
  }

  function handleDeleteTask(e) {
    console.log(e.target.value);
  }

  function handleEditTask(e) {
    console.log(e.target.value);
  }
}
