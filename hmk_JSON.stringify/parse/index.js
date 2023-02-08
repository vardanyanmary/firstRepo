const userName = document.getElementById('userName')
const password = document.getElementById('password')

let obj = {
    userName: '',
    password: '',
}

const changeObjectValues = (e) => {
    obj = { ...obj, [e.target.id]: e.target.value }
    console.log(`${JSON.stringify(obj)}`)
    // console.log(obj)
}

userName.addEventListener('change', changeObjectValues)
password.addEventListener('change', changeObjectValues)


const submit = document.getElementById('submit')

const clickToSubmit = (e) => {

    function userPas (userName, password) {

        return new Promise((resolve, reject) => {

            if (JSON.stringify(obj)) {
                resolve("Worked!");
            } else {
                reject(Error("It didn't work!"));
            }

        });
    }

    userPas (userName, password)
        // .then(JSON.stringify(obj)) => console.log(`${JSON.parse(obj)}`)
        .catch(err => console.warn(err))
}

submit.addEventListener('click', clickToSubmit)