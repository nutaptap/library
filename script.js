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

// GET THE FORM DATA

function getData() {
  const getTitle = document.getElementById("title").value;
  const getAuthor = document.getElementById("author").value;
  const getPages = document.getElementById("pages").value;
  const getRead = document.getElementById("read").checked;
  createNewCard(getTitle, getAuthor, getPages, getRead);
  makeInvisible();
}

// LIBRARY

const library = document.getElementById("cards-container");

function createNewCard(title, author, pages, read) {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.innerHTML = `
  <button onClick="this.parentNode.parentNode.removeChild(this.parentNode);" class="card-delete" id="card-delete"
          ><img class="delete-image" src="delete.svg"
        /></button>
        <div class="card-title"><h3>${title}</h3></div>
        <div class="card-author"><p>${author}</p></div>
        <div class="card-pages"><p>${pages} Pages</p></div>
        <button class="read-button" id="read-button"
          >Read <img class="check-image" src="check-filled.svg"
        /></button>
`;
  library.appendChild(newCard);
}

createNewCard(
  "Harry Potter and the Prisioner of Azkaban",
  "J.K. Rowling",
  "317",
  true
);

createNewCard("Atomic Habits", "James Clear", "285", true);

createNewCard(
  "Harry Potter and the Prisioner of Azkaban",
  "J.K. Rowling",
  "317",
  true
);

createNewCard(
  "Harry Potter and the Prisioner of Azkaban",
  "J.K. Rowling",
  "317",
  true
);

createNewCard(
  "Harry Potter and the Prisioner of Azkaban",
  "J.K. Rowling",
  "317",
  true
);

createNewCard(
  "Harry Potter and the Prisioner of Azkaban",
  "J.K. Rowling",
  "317",
  true
);
