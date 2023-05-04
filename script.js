
let library = [
    { title: "book1", pages: 30 },
    { title: "book2", pages: 10 },
    { title: "book3", pages: 44 },
];



function book(title, pages) {
  // the constructor...
  this.title = title;
  this.pages = pages;
  
}

let counter = 0;

function libraryLoop() {
  
 

library.forEach((book, index) => {
  let template = document.getElementById("newBook");
  let clone = template.content.cloneNode(true);
    let bookContainer = document.querySelector(".book-container")
    let div = clone.querySelector(".Book");
    div.setAttribute("data-num", counter);
  let title = div.querySelector(".BookTitle");
  title.textContent = "\"" + book.title + "\"";
  let pages = div.querySelector(".BookPages");
  pages.textContent = book.pages + " pages";
  bookContainer.appendChild(clone);
  book.dataNum = `${counter}`;
  counter++;
  
  remove();

});

 
}

function GetInfo() {
  let title = "Eagle";
  let pages = 55;
  AddBookToLibrary(title, pages);
}

function AddBookToLibrary (title, pages) {
let title1 = title;
let pages1 = pages;
const book1 = new book(title1, pages1);
console.log(book1);
library.push(book1);
console.log(library);
libraryLoop();

}


GetInfo();

function remove() {
  document.querySelectorAll('.Remove').forEach(button => {
    button.addEventListener('click', () => {
      let dataNum = button.parentNode.getAttribute('data-num');
  console.log(dataNum)
  library = library.filter((book, index) => {
        if (book.dataNum === dataNum) {
          let div = document.querySelector(`div[data-num="${dataNum}"]`);
          div.parentNode.removeChild(div);
          return false;
        }
        return true;
  });
    });
  });
  //add event listner to the remove button.
  //envoke remove function onclick
  //remove function pops out the index of the book from array(data attribute in html)
  //once again calls libraryLoop function. maybe there is a way to do that without having to call it.
  //better to Removechild probably.
}
