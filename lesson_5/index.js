// const userName = document.getElementById('userName')

// let obj = {
//     userName: '',
//     password:''
// }

// const changeObjectValue = (e) => {
//     obj = { ...obj , [e.target.id] : e.target.value 
// }

// userName.addEventListener('change',)

const obj = {
    name: "name",
    age: 55,
    cars: ['mercedes, bmw, audi'],
    info: {
        lastName: 'lastName',
        degree: "bachelor"
    }
}


Object.prototype.toString = function () {
    return JSON.stringify(this)
}

// console.log(obj)


const stringifiedObject = obj.toString()
console.log(stringifiedObject)

console.log(['hello', 5, true].toString())

// console.log(obj.toString())

console.log(JSON.parse(stringifiedObject))