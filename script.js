let myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    haveRead = read ? 'read': 'not read yet';
    this.info = `${title} by ${author}, ${pages} pages, ${haveRead}.`
}


function addBookToLibrary(){
    let modal1 = document.querySelector(".modal");
    if(modal1 == null){
        cont.classList.add('askForForm');
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = "<h2>Add your book<h2> <form id='form'><input placeholder='Title' id='title' required><input placeholder='Author(s)' id='author' required><input type=number min=1 placeholder='Pages' id='pages' required><div><label for='did-read'>Have you read it?</label><input type='checkbox' id='did-read'></div><input type='submit' id='submit'></form>"
        body.appendChild(modal)
        submit = document.getElementById('submit');
        submit.addEventListener('click', (e)=> {
            title = document.forms['form'].elements['title'].value;
            author = document.forms['form'].elements['author'].value;
            pages = document.forms['form'].elements['pages'].value;
            read = document.forms['form'].elements['did-read'].checked;
            myLibrary.push(new Book(title, author, pages, read));
            modal.remove();
            Array.from(books.children).forEach(book=>{books.removeChild(book)});
            displayBooks();
            e.preventDefault();
        })
    }

}


function displayBooks(){
    myLibrary.forEach( book=> {
        let card = document.createElement('div');
        card.classList.add('book')
        card.innerHTML =`<div class='left'><div>Title:</div><div>Author:</div><div>Pages:</div></div><div class='right'><div>${book.title}</div><div>${book.author}</div><div>${book.pages}</div></div><div class='remove'><button id='remove'>Remove</button></div>`
        if(book.read){
            let readBtn = document.createElement('button');
            readBtn.textContent = 'Read';
            let readDiv = document.createElement('div');
            readDiv.classList.add('read');
            readDiv.appendChild(readBtn);
            card.appendChild(readDiv);
        }
        else{
            let readBtn = document.createElement('button');
            readBtn.textContent = 'Not read';
            let readDiv = document.createElement('div');
            readDiv.classList.add('not-read');
            readDiv.appendChild(readBtn);
            card.appendChild(readDiv);
            card.style.borderLeft = '30px solid rgb(233, 0, 0)';
        }
        books.appendChild(card);
        book.card = card;
    })
    let remove = document.querySelectorAll('#remove');
    Array.from(remove).forEach(rmv => rmv.addEventListener('click', (e) => {
        myLibrary.forEach(book => {
            if(book.card === e.target.parentElement.parentElement){
                let index = myLibrary.indexOf(book);
                myLibrary.splice(index,1);
            }
        })
        e.target.parentElement.parentElement.remove();
    }))
    readButton();
}


function readButton(){
    let readBtn = document.querySelectorAll('.read>button');
    let readBtnArr =  Array.from(readBtn);
    readBtnArr.forEach(rBtn => rBtn.addEventListener('click', (e, rBtn) => {
        e.target.parentElement.classList.remove('read');
        e.target.parentElement.classList.add('not-read');
        e.target.textContent = "Not read"
        e.target.parentElement.parentElement.style.borderLeftColor = 'rgb(233, 0, 0)';
        myLibrary.forEach(book => {
            if(book.card === e.target.parentElement.parentElement){
                book.read = false;
            }
        })
        readButton();
    }))
    let nReadBtn = document.querySelectorAll('.not-read>button');
    let nReadBtnArr = Array.from(nReadBtn);
    nReadBtnArr.forEach(rBtn => rBtn.addEventListener('click', (e, rBtn) => {
        e.target.parentElement.classList.remove('not-read');
        e.target.parentElement.classList.add('read');
        e.target.textContent = "Read";
        e.target.parentElement.parentElement.style.borderLeftColor = 'rgb(0, 180, 0)';
        myLibrary.forEach(book => {
            if(book.card === e.target.parentElement.parentElement){
                book.read = true;
            }
        })
        readButton();
    }))
}


const body = document.querySelector('body');
const cont = document.querySelector('.body');
const books = document.querySelector(".books");
let addBtn = document.querySelector('#add-book');
let modal = document.querySelector(".modal");
let submit; 
let title;
let author;
let pages;
let read;


cont.addEventListener('click', function(e){
    let modal1 = document.querySelector(".modal");
    if(e.target != addBtn && e.target != modal1){
        if(modal1 != null){
            let modal = document.querySelector(".modal");
            modal.remove();
        }
    }
})
addBtn.addEventListener('click', addBookToLibrary)




