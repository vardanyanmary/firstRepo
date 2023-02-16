const ul = document.getElementById("ul");

const URL = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();

xhr.responseType = "json";
xhr.open("GET", URL);

xhr.onerror = (e) => {
    console.log(e, "error");
};

xhr.onloadstart = () => {
    ul.innerText = "Loading...";
};

xhr.onload = () => {
    if (xhr.status <= 400) {
        const res = xhr.response;
        res.forEach((user) => {
            const li = document.createElement("li");
            li.innerHTML = user.name;
            ul.appendChild(li);
        });
    }
    // console.log(xhr.response);
};

xhr.send();

//------------ fetch --------------

const requestURL = 'https://jsonplaceholder.typicode.com/users'

async function sendRequest(method, _url, body = null) {
    const headers = {
        'Content-Type': 'application/json',
        'Content-Language': 'eng'
    }


    return fetch(requestURL, {
        method,
        body: JSON.stringify(body),
        headers
    }).then(async response => {

        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Something went wrong')
            e.data = error
            throw e
        })
    })
}

// const body = {
//     name: 'Mari',
//     age: 21
// }

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))