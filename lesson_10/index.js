const btn = document.getElementById('btn')
const LOCAL_STORAGE_QUOTES_KEY = 'quotes'

const api_url = "https://api.kanye.rest";

btn.addEventListener('click', async (e) => {
    try {
        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data)

        class AuthorsQuotes {
            constructor() {
                this.quotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY))
                    || []
            }

            addTodoTask(newQuotes) {
                    this.quotes.push(newQuotes)
                    localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
                }
            }

            // renderTask(data) {
            //     const quotes = document.querySelector('#tasksList')
            //         // console.log(this.authors, 'render');
            //         (data ? data : this.authors).forEach(({ id, text }) => {

            //             const tasks = document.createElement('li');
            //             tasks.setAttribute('id', id)
            //             const newSpan = document.createElement('span')
            //             newSpan.innerHTML = text

            //             quotes.appendChild(tasks)
            //         })
            // }

        const quotes = new AuthorsQuotes()

        quotes.addTodoTask()
        quotes.renderTask()

    } catch {
        (err) => { console.error(err); }
    }
})

// classy  hanel listeneri callbacki mejic , classic instance hanel , clickic heto gnal request anel u response-y stanal , .json popoxakany kanchel , mer class addToDo kanchel .json argumentum , rendera petq anel 
