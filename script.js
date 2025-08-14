const addBtn=document.getElementById('add-btn')
const userInputTask = document.getElementById('taskinput')
const taskList=document.getElementById('taskList')

addBtn.addEventListener('click' , ()=>{
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
    doneBtn.addEventListener('click',()=>{
        taskText.classList.toggle('done')
    })
    
    //a delete button
    const deleteBtn= document.createElement('button')
    deleteBtn.className='task-btn delete'
    deleteBtn.textContent=' Delete ❌'
    deleteBtn.addEventListener('click',()=>{
        taskBox.remove()
    })


    taskList.appendChild(taskBox);
    taskBox.appendChild(taskText);
    taskBox.appendChild(actions);
    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
    
    userInputTask = '';
})
