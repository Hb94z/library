let library = [

];

let counter = 0;

function book(title, pages, status) {

  this.title = title;
  this.pages = pages;
  this.status = status;
}

function displayBook() {
  
  let template = document.getElementById("newBook");
  let clone = template.content.cloneNode(true);
    let bookContainer = document.querySelector(".book-container")
    let div = clone.querySelector(".Book");
    div.setAttribute("data-num", counter);
    let hasRead = div.querySelector(".HasRead");
    hasRead.textContent = newBook.status;

  let title = div.querySelector(".BookTitle");
  title.textContent = "Title: " + newBook.title;
  let pages = div.querySelector(".BookPages");
  pages.textContent = newBook.pages + " pages";
  bookContainer.appendChild(clone);
  newBook.dataNum = `${counter}`;
  counter++;
  dataNum = div.getAttribute('data-num');
 hasRead.addEventListener("click", toggle);
 function toggle() {
  library.forEach((book) => {
        let dataNum = div.getAttribute('data-num');
      
      if (book.status === "Not read yet" && book.dataNum === dataNum) {
        
      book.status = "Read";
      hasRead.textContent = book.status;
      console.log(library);

      } else if (book.status === "Read" && book.dataNum === dataNum) {
        book.status = "Not read yet";
        hasRead.textContent = book.status;
        console.log(library);
      }});
}

  remove();
}

function GetInfo() {
  let title = title2;
  let pages = pages2;
  let status = status2;
  AddBookToLibrary(title, pages, status);
}

function AddBookToLibrary (title, pages, status) {
let title1 = title;
let pages1 = pages;
console.log(status);
let status1 = status;
newBook = new book(title1, pages1, status1);
console.log(newBook);
library.push(newBook);
console.log(library);
displayBook(newBook);
}

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

var modal = document.getElementById("add-book");
var btn = document.getElementById("add-button");
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
let form = document.getElementById("addbookform")
form.addEventListener("submit", (e) => {
  e.preventDefault();

  title2 = document.getElementById("title").value;
  pages2 = document.getElementById("pages").value;
  status2 = document.getElementById('isRead').checked;
  console.log(status2)
  if (status2 === false) {
    status2 = "Not read yet"
  
  }
  if (status2 === true) {
     status2 = "Read"
  }

GetInfo(title2, pages2, status2)
});