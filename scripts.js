// Sample Data
const books = [
  { title: "Physics Essentials", category: "Science" },
  { title: "Engineering Math", category: "Engineering" },
  { title: "World History", category: "History" },
  { title: "IELTS Practice", category: "IELTS" },
  { title: "WAEC Chemistry", category: "WAEC" },
  { title: "Project Management", category: "Project Work" },
];

// Function to Display Books
function displayBooks(bookArray) {
  const bookGrid = document.getElementById("book-grid");
  bookGrid.innerHTML = ""; // Clear grid before displaying

  bookArray.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;

    const bookCategory = document.createElement("p");
    bookCategory.classList.add("book-category");
    bookCategory.textContent = book.category;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookCategory);
    bookGrid.appendChild(bookCard);
  });
}

// Filter Books Based on Category
document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.textContent;
    const filteredBooks = books.filter((book) => book.category === category);
    displayBooks(filteredBooks);
  });
});

// Initial Display of All Books
displayBooks(books);
