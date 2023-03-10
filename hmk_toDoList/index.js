const taskList = document.querySelector('#tasksList')

const LOCAL_STORAGE_TASKS_KEY = 'tasks'

class ToDoList {
    constructor() {
        this.tasksToDo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))
            || []

        if (this.tasksToDo.length) {
            this.renderTask(this.tasksToDo)
        }
    }

    addTodoTask() {
        if (taskInput.value == '') {
            alert(' Enter Something !!! ')
        } else { 
            const taskInput = document.querySelector('#taskInput')
            console.dir(taskInput, 'taskInput');
            const taskText = taskInput.value

            const newTask = {
                id: this.tasksToDo.length + 1,
                text: taskText,
                // isCompleted: false
            }

            this.tasksToDo.push(newTask)
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(this.tasksToDo))
            this.addTodoTask(tasksToDo)

            // console.log(tasksToDo);
            taskInput.value = ''

        }
    }

    deleteToDoList() {
        const btn = document.createElement('button')
        const currentElementId = Number(btn.id)
        const newData = this.tasksToDo.filter(({ id }) => {
            // console.log(id);
            return id !== currentElementId
        })
        // console.log(newData, 'newData');
        this.addTodoTask = newData
        this.renderTask(newData)
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
