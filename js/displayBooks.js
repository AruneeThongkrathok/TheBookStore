
export function displayBooks(books) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const bookElem = document.createElement("div");
      bookElem.classList.add("card");
      bookElem.innerHTML = `
      <img src="${book.image}" class="card-img-top" alt="${book.title}" data-id="${book.id}">
      <div class="card-body">
        <h6 class="card-title">${book.title}</h6>
        <h6 class="card-author">Author: ${book.author}</h6>
        <div class="card-price">Price: $${book.price}</div> 
      </div>`;
      container.appendChild(bookElem);
  
      const bookImg = bookElem.querySelector("img");
      bookImg.addEventListener("click", () => {
        const bookId = bookImg.dataset.id;
        const bookObj = books.find((book) => book.id === parseInt(bookId));

        alert(`Title: ${bookObj.title}\nAuthor: ${bookObj.author}\nCategory: ${bookObj.category}\nDescription: ${bookObj.description}\nPrice: $${bookObj.price}`);
      });
    }
  }