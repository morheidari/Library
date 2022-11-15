let myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    haveRead = read=='on' ? 'read': 'not read yet';
    this.info = `${title} by ${author}, ${pages} pages, ${haveRead}.`
}


function createForm(){
    let modal1 = document.querySelector(".modal");
    if(modal1 == null){
        cont.classList.add('askForForm');
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = "<h2>Add your book<h2> <form id='form'><input placeholder='Title' id='title'><input placeholder='Author(s)' id='author'><input type=number placeholder='Pages' id='pages'><div><label for='did-read'>Have you read it?</label><input type='checkbox' id='did-read'></div><input type='submit' id='submit'></form>"
        body.appendChild(modal)
        submit = document.getElementById('submit');
        submit.addEventListener('click', (e)=> {
            title = document.forms['form'].elements['title'].value;
            author = document.forms['form'].elements['author'].value;
            pages = document.forms['form'].elements['pages'].value;
            read = document.forms['form'].elements['did-read'].value;
            myLibrary.push(new Book(title, author, pages, read));
            modal.remove();
            e.preventDefault();
        })
    }

}


function displayBook(){
    myLibrary.forEach( book=> {
    
    })
}

const body = document.querySelector('body');
const cont = document.querySelector('.body');
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
addBtn.addEventListener('click', createForm)


