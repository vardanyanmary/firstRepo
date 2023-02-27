const BASE_URL = 'https://jsonplaceholder.typicode.com'

const getUsersBtn = document.querySelector('#getUsersBtn')
const createUser = document.querySelector('#createUser')
const usersContainer = document.querySelector('#usersContainer')

const api = axios.create({
    baseURL: BASE_URL
})

class UserService {
    constructor() {
        this.users = []
    }

    async getAllUsers() {
        try {
            const res = await api.get('/users');
            this.users = res.data
            this.renderUser(this.users)
        } catch (error) {
            console.log(error);
        }
    }

    async createUser() {

        try {
            const usernameInput = document.querySelector('#usernameInput')
            const passwordInput = document.querySelector('#passwordInput')

            const sendData = await api.post('/users', {
                userName: usernameInput.value,
                password: passwordInput.value

            })
            // console.log(sendData);
            this.users.push(sendData.data.userName)
            this.renderItem(sendData.data.userName)

        } catch (error) {
            console.log(error);
        }
    }

    renderItem(username) {

        const usersDiv = document.createElement('div')
        usersDiv.setAttribute('id', 'usersDiv')

        const usersName = document.createElement('p')
        usersName.setAttribute('id', 'usersNameP')

        const btn = document.createElement('button')
        btn.setAttribute('id', 'deleteBtn')

        usersName.innerHTML = username

        usersContainer.appendChild(usersDiv)
        usersDiv.appendChild(usersName)
        usersDiv.appendChild(btn)

        btn.innerText = 'Delete'
        btn.addEventListener('click', () => { this.deleteUser(user.id) })
       
    }

    renderUser() { // for appendChild

        // console.log(this.users)
        usersContainer.innerHTML = ''
        this.users.forEach(user => {
            // console.log(user)
            const usersDiv = document.createElement('div')
            usersDiv.setAttribute('id', 'usersDiv')

            const usersName = document.createElement('p')
            usersName.setAttribute('id', 'usersNameP')

            const btn = document.createElement('button')
            btn.setAttribute('id', 'deleteBtn')

            usersName.innerHTML = user.name

            usersContainer.appendChild(usersDiv)
            usersDiv.appendChild(usersName)
            usersDiv.appendChild(btn)

            btn.innerText = 'Delete'
            btn.addEventListener('click', () => { this.deleteUser(user.id) })

        });

    }

    deleteUser(userId) {
        const deleteData = this.users.filter((user) => {
            return userId !== user.id;
        })
        this.users = deleteData
        this.renderUser()
    }

    // deleteItem(userId) {
    //     const deleteData = this.users.filter((user) => {
    //         return userId !== user.id;
    //     })
    //     this.users = deleteData
    //     this.renderItem()
    // }

}

const user = new UserService()

getUsersBtn.addEventListener('click', () => {
    user.getAllUsers()
})
createUser.addEventListener('click', () => {
    user.createUser()
})