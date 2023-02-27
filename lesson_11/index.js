const BASE_URL = 'https://jsonplaceholder.typicode.com'
const post = '/posts'

const api = axios.create({
    baseURL: BASE_URL
})

api.get(post)

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
 
async function getPost() {
    try {
        const {data: res} = await api.post(postURL, postBody,{ 
            headers: postHeaders }) ;
        // const res = await axios.get(postURL, postBody, postHeaders)
        console.log(res)
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

// api.get(post)

