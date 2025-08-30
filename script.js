const addBtn = document.getElementById('add-btn')
const userInputTask = document.getElementById('taskinput')
const taskList = document.getElementById('taskList')

function addTask() {
  const taskTextValue = userInputTask.value.trim()
  if (taskTextValue === "") return alert("You have to write a task!")

  // create task item <li>
  const taskBox = document.createElement('li')
  taskBox.className = 'task-box'

  // task text
  const taskText = document.createElement('div')
  taskText.className = 'task-text'
  taskText.textContent = taskTextValue

  // actions row
  const actions = document.createElement('div')
  actions.className = 'task-actions'

  // checkbox
  const doneCheckbox = document.createElement('input')
  doneCheckbox.type = 'checkbox'
  doneCheckbox.className = 'task-checkbox'

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

  userInputTask.value = '' // clear input
}

addBtn.addEventListener('click', addTask)

userInputTask.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask()
})

// event delegation
taskList.addEventListener('click', e => {
  if (e.target.classList.contains('task-checkbox')) {
    const taskBox = e.target.closest('.task-box')
    const taskText = taskBox.querySelector('.task-text')
    taskText.classList.toggle('done', e.target.checked)
  }
  if (e.target.classList.contains('delete')) {
    const taskBox = e.target.closest('.task-box')
    taskBox.remove()
  }
})
