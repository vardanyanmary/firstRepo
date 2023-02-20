const form = document.querySelector('form')
const allInputes = document.querySelectorAll('input')

let user = {}

const SUBMIT_KEY_FOR_LOVAL_STORAGE = 'SUBMIT_KEY_FOR_LOVAL_STORAGE'

const changeBody = (e) => {
    body = { ...user, [e.target.name]: e.target.value }
}

allInputes.forEach((input) => {
    input.addEventListener('change', changeBody)
})

form.addEventListener('submit',(e) => {

    e.preventDefault();
    
    localStorage.setItem(SUBMIT_KEY_FOR_LOVAL_STORAGE, JSON.stringify(user))

})
    // try {
    //     console.log(body)
    //     const res = await fetch('xdfbxb ', {
    //         method: "POST",
    //         body: JSON.stringify(body)
    //     })
    // } catch {
    //     (err) => {
    //         console.error(err);
    //     }
    // }