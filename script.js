// ADD A BOOK FORM

const addButton = document.getElementById("add-button");
const form = document.getElementById("form");
const blur = document.getElementById("blur");

form.style.visibility = "hidden";
blur.style.visibility = "hidden";

function makeVisible() {
  if (form.style.visibility === "hidden") {
    form.style.visibility = "visible";
    blur.style.visibility = "visible";
  }
}

function makeInvisible() {
  if (form.style.visibility === "visible") {
    form.style.visibility = "hidden";
    blur.style.visibility = "hidden";
  }
}

addButton.addEventListener("click", () => {
  makeVisible();
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    makeInvisible();
  }
});

// LIBRARY

const library = document.getElementById("cards-container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let placeholderTitle = "James Potates";
let placeholderAuthor = "My potato";
let placeholderPages = "434";

function createNewCard() {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.innerHTML = `
  <button class="card-delete"
          ><img class="delete-image" src="delete.svg"
        /></button>
        <div class="card-title"><h3>${placeholderTitle}</h3></div>
        <div class="card-author"><p>${placeholderAuthor}</p></div>
        <div class="card-pages"><p>${placeholderPages} Pages</p></div>
        <div class="card-read"
          ><p>Read</p
          ><button class="read-button"
            ><img class="check-image" src="check-filled.svg" /></button
        ></div>
`;
  library.appendChild(newCard);
}

createNewCard();

function addNewBook() {}
