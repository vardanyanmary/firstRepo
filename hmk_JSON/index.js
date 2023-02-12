// const userName = document.getElementById('userName')
// const password = document.getElementById('password')



// let obj = {
//     userName: '',
//     password: '',
// }

// const changeObjectValues = (e) => {
//     obj = { ...obj, [e.target.id]: e.target.value }
//     console.log(`${JSON.stringify(obj)}`)
// }
// userName.addEventListener('change', changeObjectValues)
// password.addEventListener('change', changeObjectValues)


// const submit = document.getElementById('submit')
// const stringify = JSON.stringify(obj)

// const userPas = (obj) => {
//     return new Promise((resolve, reject) => {
//         if (obj) {
//             resolve(JSON.stringify(obj));
//         } else {
//             reject(Error("It doesn't work!"));
//         }s
//     });
// }

// const clickToSubmit = async () => {
//     try{
//         const res = await userPas(obj)   
//         console.log(JSON.parse(res))
//     }   catch(error) {
//         console.log(error, 'error');
//     }
// }

// submit.addEventListener('click', clickToSubmit)