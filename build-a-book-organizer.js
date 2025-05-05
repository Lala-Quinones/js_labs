let books = [
  {
    title: 'One Hundred Years of Solitude',
    authorName: 'Gabriel García Márquez',
    releaseYear: 1967
  },
  {
    title: 'To Kill a Mockingbird',
    authorName: 'Harper Lee',
    releaseYear: 1960
  },
  {
    title: '1984',
    authorName: 'George Orwell',
    releaseYear: 1949
  }
];

function sortByYear(bookOne, bookTwo) {
  if (bookOne.releaseYear === bookTwo.releaseYear) {
    return 0;
  } else if (bookOne.releaseYear < bookTwo.releaseYear) {
    return -1;
  } else {
    return 1;
  }
};

function filteredByYear(catalog, year) {
  return catalog
  .filter((book) => book.releaseYear >= year);
}

let filteredBooks = filteredByYear(books, 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
