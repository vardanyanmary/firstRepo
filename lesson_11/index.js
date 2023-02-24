const getAllPostBtn = document.querySelector('#getAllPost')

const postURL = 'https://jsonplaceholder.typicode.com/posts'

const postHeaders = {
    'Content-Type': 'application/json'
}

const postBody = ({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
})

const postConfig = {
    body: JSON.stringify(postBody),
    headers: postHeaders
}

async function getPost() {
    try {
        // const res = await axios.post(postURL, postBody, postHeaders) ;
        const { data } = await axios.get(postURL, postBody, postHeaders)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAllPostBtn.addEventListener('click', getPost)

//--------------------------------------------------



// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// const post = '/posts'

// const api = axios.create({
//     baseURL: BASE_URL
// })