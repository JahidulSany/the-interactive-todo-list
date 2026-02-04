// Catch the DOM Elements
const inputEl = document.getElementById('floatingInput');
// console.log(inputEl);

const addTaskButton = document.getElementById('addTask');
// console.log(addTaskButton);

// Catch the All tasks div Element
const allTasksDiv = document.getElementById('allTasks');

// EventListeners
addTaskButton.addEventListener('click', handleAddTask);

function handleAddTask(event) {
  event.preventDefault();

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
        <input onclick="handleCheckTaskBox(event)" class="form-check-input mt-0 checkbox-task" type="checkbox">
        <p class="m-0 mx-2 task-text">${taskValue}</p>
        <button onclick="handleDeleteTask(event)" type="button" class="btn btn-danger delete-task">
            Delete Task
        </button>
        <button onclick="handleEditTask(event)" type="button" class="btn btn-info edit-task">
            Edit Task
        </button>
`;

  taskContainer.innerHTML = taskContent;

  allTasksDiv.appendChild(taskContainer);

  inputEl.value = '';
}

// implementing Checkbox Functionality
function handleCheckTaskBox(event) {
  const taskContainer = event.target.parentElement;
  const taskText = taskContainer.querySelector('.task-text');
  event.target.checked
    ? taskText.classList.add('text-decoration-line-through')
    : taskText.classList.remove('text-decoration-line-through');
}

// Implementing Delete Task Functionalty
function handleDeleteTask(event) {
  allTasksDiv.removeChild(event.target.parentElement);
}

// Implementing Edit Task Functionalty
function handleEditTask(event) {
  console.log(event.target);
}
