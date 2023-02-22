const btn = document.getElementById('btn')

const LOCAL_STORAGE_QUOTES_KEY = 'quotes'
const api_url = "https://api.kanye.rest";

class AuthorsQuotes {

    constructor() {
        this.quotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY))
            || []
    }

    addQuotes(newQuotes) {
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
        this.quotes.push(newQuotes)   
    }

    renderQuotes(data) {
        console.log(" Render Quotes ");
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
        
        const quotesList = document.querySelector('#quotesList')
        console.log(this.quotes, 'render');

        (data ? data : this.quotes).forEach(quote => {
                const quotesLi = document.createElement('li')
                const span = document.createElement('span')

                span.innerHTML = quote


                // quotesLi.appendChild(button)
                quotesLi.appendChild(span)
                quotesList.appendChild(quotesLi)

        });

        //     (data ? data : this.quotes).forEach(({ id, quotes }) => {

        //         const quotesLi = document.createElement('li')
        //         const span = document.createElement('span')

        //         quotesLi.setAttribute('id', id)
        //         span.innerHTML = quotes

        //         const button = document.createElement('button')
        //         button.setAttribute('id', id)

        //         button.addEventListener('click', () => {
        //             // this.deleteToDoList(btn)
        //         })
        //         button.innerText = ('Delete')

        //         quotesLi.appendChild(span)
        //         quotesLi.appendChild(button)
        //         quotesList.appendChild(quotesLi)
                
        //     })
    }
}
    /* ////////////////////////////////////////////////
        renderQuotes(data) {

        let quotes = addQuotes()
        let html = '';
        localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(this.quotes))
        const quotesList = document.querySelector('#quotesList')

        quotes.forEach( quote => {

                const quotesLi = document.createElement('li');
                const span = document.createElement('span');
                span.innerHTML = quote;
                const button = document.createElement('button');
                button.setAttribute('id', id);

                button.addEventListener('click', () => {
                     // this.deleteToDoList(btn)
                 });
                button.innerText = ('Delete');

                quotesLi.appendChild(span);
                quotesLi.appendChild(button);
                quotesList.appendChild(quotesLi);

                html.appendChild(quotesList) 
            })

            let container = document.querySelector('.container')
            container.innerHTML = html;
    }
}
*/

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