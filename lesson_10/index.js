const btn = document.getElementById('btn')
const quotesList = document.querySelector('#quotesList')

const LOCAL_STORAGE_QUOTES_KEY = 'quotes'
const api_url = "https://api.kanye.rest";

class AuthorsQuotes {
    constructor() {
        this.quotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY)) || []
        if (this.quotes.length !== 0) { 
            this.renderQuotes()
        }
    }

    addQuote(newQuote) {
        this.quotes.push(newQuote.quote)
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
    }

    renderQuotes() {
        quotesList.innerHTML = '' 
        console.log(this.quotes)
        this.quotes.forEach( quote => {
            const quotesLi = document.createElement('li')
            quotesLi.setAttribute('id', "list-group-item")
            const span = document.createElement('span')
            span.innerHTML = quote

            const button = document.createElement('button')

            button.setAttribute('id', 'deleteBtn')
            button.addEventListener('click', () => { this.deleteQuotes(quote) })
            button.innerText = 'Delete'

            quotesLi.appendChild(span)
            quotesLi.appendChild(button)
            quotesList.appendChild(quotesLi)
        });
    }

    deleteQuotes(quote) { 
        const newData = this.quotes.filter((value) => {
            return value !== quote;
        })
        this.quotes = newData
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(newData))
        this.renderQuotes()
    }
}


const quotes = new AuthorsQuotes()

async function getQuote() {
    try {
        const response = await fetch(api_url)
        const quote = await response.json()
        quotes.addQuote(quote)
        quotes.renderQuotes()
    } catch (err) {
        console.error(err);
    }
}

btn.addEventListener('click', getQuote)