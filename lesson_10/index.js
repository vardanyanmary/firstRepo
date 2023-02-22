const btn = document.getElementById('btn')

const LOCAL_STORAGE_QUOTES_KEY = 'quotes'

const api_url = "https://api.kanye.rest";

class AuthorsQuotes {
    constructor() {
        this.quotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY))
            || []
    }

    addQuotes(newQuotes) {
        this.quotes.push(newQuotes)
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
    }


    renderQuotes(data) {
        const quotesList = document.querySelector('#quotesList')
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))

        (data ? data : this.quotes).forEach(({ id , quotes}) => {
            
            const quotesLi = document.createElement('li');
            quotesList.setAttribute('id', id)
            const newSpan = document.createElement('span')
            newSpan.innerHTML = quotes

            const btn = document.createElement('button')
            btn.setAttribute('id', id)

            btn.addEventListener('click', () => {
                this.deleteToDoList(btn)
            })
            btn.innerText = ('Delete')

            quotesLi.appendChild(newSpan)
            quotesLi.appendChild(btn)
            quotesList.appendChild(quotesLi)
        })
    }
}


 async function quotesFunc() {
    try {
        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data)
        
        const quotes = new AuthorsQuotes()

        quotes.addQuotes(data)
        quotes.renderQuotes(data)

    } catch {
        (err) => { console.error(err); }
    }
}


btn.addEventListener('click', quotesFunc)

