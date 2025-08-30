const addBtn = document.getElementById('add-btn')
const userInputTask = document.getElementById('taskinput')
const taskList = document.getElementById('taskList')

// 🔹 Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', loadTasks)

function addTask(taskTextValue, isDone = false) {
  const taskTextVal = taskTextValue ? taskTextValue.trim() : userInputTask.value.trim()
  if (taskTextVal === "") return alert("You have to write a task!")

  // create task item <li>
  const taskBox = document.createElement('li')
  taskBox.className = 'task-box'

  // task text
  const taskText = document.createElement('div')
  taskText.className = 'task-text'
  taskText.textContent = taskTextVal
  if (isDone) taskText.classList.add('done')

  // actions row
  const actions = document.createElement('div')
  actions.className = 'task-actions'

  // checkbox
  const doneCheckbox = document.createElement('input')
  doneCheckbox.type = 'checkbox'
  doneCheckbox.className = 'task-checkbox'
  doneCheckbox.checked = isDone

  // delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'task-btn delete'
  deleteBtn.textContent = 'Delete ❌'

  // append everything
  taskList.appendChild(taskBox)
  taskBox.appendChild(taskText)
  taskBox.appendChild(actions)
  actions.appendChild(doneCheckbox)
  actions.appendChild(deleteBtn)

  if (!taskTextValue) userInputTask.value = '' // clear input if new task
  saveTasks() // save to localStorage
}

addBtn.addEventListener('click', () => addTask())

userInputTask.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask()
})

// event delegation
taskList.addEventListener('click', e => {
  if (e.target.classList.contains('task-checkbox')) {
    const taskBox = e.target.closest('.task-box')
    const taskText = taskBox.querySelector('.task-text')
    taskText.classList.toggle('done', e.target.checked)
    saveTasks()
  }
  if (e.target.classList.contains('delete')) {
    const taskBox = e.target.closest('.task-box')
    taskBox.remove()
    saveTasks()
  }
})

// Save tasks to localStorage
function saveTasks() {
  const tasks = []
  document.querySelectorAll('.task-box').forEach(taskBox => {
    const text = taskBox.querySelector('.task-text').textContent
    const isDone = taskBox.querySelector('.task-checkbox').checked
    tasks.push({ text, done: isDone })
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Load tasks from localStorage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
  savedTasks.forEach(task => addTask(task.text, task.done))
}
