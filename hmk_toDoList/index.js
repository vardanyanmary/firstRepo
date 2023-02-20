const taskList = document.querySelector('#tasksList')

class ToDoList {
    constructor(){
        this.tasksToDo = []
    }

    addTodoTask(){
        if (taskInput.value == '') {
            alert(' Enter Something !!! ')
        }  else {
            const taskInput = document.querySelector('#taskInput')
            console.dir(taskInput, 'taskInput');
            const taskText = taskInput.value

            const newTask = {
                id: this.tasksToDo.length + 1,
                text: taskText,
                // isCompleted: false
            }
            
            this.tasksToDo.push(newTask)

            // console.log(tasksToDo);
            taskInput.value = '' 
        }
    }
  
/* ---------------------- Local Storage ----------------------

getTodoFromLocalstorage(key) {
    const todoList = JSON.parse(localStorage.getItem(key));
    return todoList;
  }

setTodoLocalstorage(key) {
    localStorage.setItem('todoList', JSON.stringify(key));
}

 addNewTodo(todo, list) {
    list.push(todo);
    todoController.setTodoLocalstorage(list);
    return todo;
  }
*/

    deleteToDoList() {        
        // const currentElementId = Number(btn.id)
        // const newData = this.tasksToDo.filter(({ id }) => {
        //     // console.log(id);
        //     return id !== currentElementId
        // })
        // // console.log(newData, 'newData');
        // this.addTodoTask = newData
        // this.renderTask(newData)
    }  

    renderTask(data) {
        const tasksList = document.querySelector('#tasksList')
        tasksList.innerHTML = ''
        console.log(this.tasksToDo, 'render');
        (data ? data : this.tasksToDo).forEach(({ id, text, /*isCompleted*/ }) => {

            const tasks = document.createElement('li');
            tasks.setAttribute('id', id)
            tasks.setAttribute('class', "list-group-item task-item")
            const newSpan = document.createElement('span')
            // console.dir(newSpan,'***');
            newSpan.innerHTML = text
            // console.dir(newSpan,'***');

            const btn = document.createElement('button')
            btn.setAttribute('class', 'btn')
            btn.setAttribute('id', id)

            btn.addEventListener('click', () => {
                this.deleteToDoList(btn)
            })
            btn.innerText = ('Delete')

            tasks.appendChild(newSpan)
            tasks.appendChild(btn)
            // console.log(tasks);
            tasksList.appendChild(tasks)

        })
    }
}

const todoList = new ToDoList()

button.addEventListener('click', () => {
    todoList.addTodoTask()
    todoList.renderTask()
    todoList.deleteToDoList()
})

// const form = document.querySelector('form')
// const allInputes = document.querySelectorAll('input')

// let user = {}

// const SUBMIT_KEY_FOR_LOCAL_STORAGE = 'SUBMIT_KEY_FOR_LOCAL_STORAGE'

// const changeBody = (e) => {
//     body = { ...user, [e.target.name]: e.target.value }
// }

// allInputes.forEach((input) => {
//     input.addEventListener('change', changeBody)
// })

// form.addEventListener('submit',(e) => {

//     e.preventDefault();
    
//     localStorage.setItem(SUBMIT_KEY_FOR_LOCAL_STORAGE, JSON.stringify(user))

// })