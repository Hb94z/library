
let library = [
    { title: "book1", pages: 30, status: "Not read yet" },
    { title: "book2", pages: 10, status: "Not read yet" },
    { title: "book3", pages: 44, status: "Not read yet" },
];



function book(title, pages, status) {

  this.title = title;
  this.pages = pages;
  this.status = status;
  
}

let counter = 0;

function libraryLoop() {
  
 

library.forEach((book, index) => {
  let template = document.getElementById("newBook");
  let clone = template.content.cloneNode(true);
    let bookContainer = document.querySelector(".book-container")
    let div = clone.querySelector(".Book");
    div.setAttribute("data-num", counter);
    
    div.setAttribute("data-read", "false");
    let hasRead = div.querySelector(".HasRead");
    hasRead.textContent = book.status;

  let title = div.querySelector(".BookTitle");
  title.textContent = "\"" + book.title + "\"";
  let pages = div.querySelector(".BookPages");
  pages.textContent = book.pages + " pages";
  bookContainer.appendChild(clone);
  book.dataNum = `${counter}`;
  counter++;
  
  document.querySelectorAll('.HasRead').forEach(button => {
    button.addEventListener('click', () => {
      let dataNum = button.parentNode.getAttribute('data-num');
      if (book.status === "Not read yet" && book.dataNum === dataNum) {
      book.status = "Read";
      hasRead.textContent = book.status;
      console.log(library);
    
      }
      else if (book.status === "Read" && book.dataNum === dataNum) {
        book.status = "Not read yet";
        hasRead.textContent = book.status;
        console.log(library);
      }

    })});
  remove();

 
});
}




function GetInfo() {
  let title = "Eagle";
  let pages = 55;
  let status = "Not read yet";
  AddBookToLibrary(title, pages, status);
}

function AddBookToLibrary (title, pages, status) {
let title1 = title;
let pages1 = pages;
let status1 = status;
const book1 = new book(title1, pages1, status1);
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

}




function toggleRead() {
  document.querySelectorAll('.HasRead').forEach(button => {
    button.addEventListener('click', () => {
      let dataNum = button.parentNode.getAttribute('data-num');
      let div = document.querySelector(".HasRead");
      console.log(dataNum);
      library.forEach((book, index) => {
        if (book.dataNum === dataNum && book.status === "Not read yet"); {
         book.status = "Read";
         
         div.textContent = book.status;
         
        }
    });
  });
});

}
