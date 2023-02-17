const form = document.querySelector('form')
const allInputes = document.querySelectorAll('input')

let body = {}

const changeBody = (e) => {
    body = { ...body, [e.target.name]: e.target.value }
}

allInputes.forEach((input) => {
    input.addEventListener('change', changeBody)
})

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        console.log(body)
        const res = await fetch('xdfbxb ', {
            method: "POST",
            body: JSON.stringify(body)
        })
    } catch {
        (err) => {
            console.error(err);
        }
    }
})