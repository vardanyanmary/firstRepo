const btn = document.getElementById('btn')

const LOCAL_STORAGE_QUOTES_KEY = 'quotes'
const api_url = "https://api.kanye.rest";

class AuthorsQuotes {
    constructor() {
        this.quotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY)) || []
    }

    addQuotes(newQuotes) {
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
        this.quotes.push(newQuotes)
    }

    renderQuotes() {
        console.log(" Render Quotes ");
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
        const quotesList = document.querySelector('#quotesList')
        console.log(this.quotes, 'render');
        
        (this.quotes).forEach(quote => {
            const quotesLi = document.createElement('li');
            quotesLi.setAttribute('id', "list-group-item")
            const span = document.createElement('span');
            span.innerHTML = quote;

            const button = document.createElement('button')
            button.setAttribute('id', 'deleteBtn')
            button.addEventListener('click', () => { this.deleteQuotes(btn) })
            button.innerText = ('Delete')
            console.log('foreach');

            quotesLi.appendChild(span)
            quotesLi.appendChild(button)
            quotesList.appendChild(quotesLi)
            
        });
    }

    deleteQuotes() {
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
        // const newData = this.quotes.filter((id) => id !== this.quotes.length + 1,)
        // console.log(newData);
        // this.addQuotes = newData
        // this.renderQuotes(newData)
    }
}

async function quotesFunc() {
    try {
        const response = await fetch(api_url)
        const data = await response.json()
        console.log( data , 'data' )

        const quotes = new AuthorsQuotes()
        quotes.addQuotes( data )
        quotes.renderQuotes( data )
        quotes.deleteQuotes( data )
    } catch {
        (err) => { console.error(err); }
    }
}

btn.addEventListener('click', quotesFunc)