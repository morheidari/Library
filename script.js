let myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    haveRead = read ? 'read': 'not read yet';
    this.info = `${title} by ${author}, ${pages} pages, ${haveRead}.`
}


function addBookToLibrary(title, author, pages, read){
    
    myLibrary.append(new Book(title, author, pages, read));
}

