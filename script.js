const addBtn=document.getElementById('add-btn')
const userInputTask = document.getElementById('taskinput')
const taskList=document.getElementById('taskList')


function addTask(){
    const taskTextValue = userInputTask.value.trim()
    if(taskTextValue==="") return alert("you have to write a task!") // so if the user entered an empty task
     
    // creating task box
    const taskBox=document.createElement('div')
    taskBox.className='task-box'

    //creating task text [what the user enterded]
    const taskText= document.createElement('div')
    taskText.className='task-text'
    taskText.textContent=taskTextValue

    // a box for the (cheack / delete)
    const actions = document.createElement('div')
    actions.className = 'task-actions'

    //a done button
    const doneBtn= document.createElement('button')
    doneBtn.className='task-btn check'
    doneBtn.textContent='Done 🎯'
    
    //a delete button
    const deleteBtn= document.createElement('button')
    deleteBtn.className='task-btn delete'
    deleteBtn.textContent=' Delete ❌'

    //append the new elements
    taskList.appendChild(taskBox);
    taskBox.appendChild(taskText);
    taskBox.appendChild(actions);
    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
    
    userInputTask.value = ''; // clear the input after adding a new task
}

addBtn.addEventListener('click',addTask) // if the user press the Add button 

userInputTask.addEventListener('keydown', e=>{ // if the user press Enter after writing a task
    if(e.key==='Enter'){
        addTask()
    }
})

// event delegation
taskList.addEventListener('click',e=>{
    if(e.target.classList.contains('check')){
        const taskBox=e.target.closest('.task-box')
        const taskText=taskBox.querySelector('.task-text')
        taskText.classList.toggle('done')
    }
    if(e.target.classList.contains('delete')){
        const taskBox=e.target.closest('.task-box')
        taskBox.remove()
    }
})
