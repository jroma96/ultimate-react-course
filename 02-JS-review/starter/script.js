const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const Book = getBook(2);
Book;
const { title, author, reviews, genres, pages } = Book;
title;
author;
reviews;
genres;
const { goodreads, librarything } = reviews;
const { rating, ...rest } = goodreads;
rest;
const newObject = { ...rest, newProperty: "new value" };
const newGenres = [...genres, "Adult"];
newGenres;
newObject;
const summary = `the book ${title} written by ${author}, with ${
  pages > 200 ? "more than 200" : "less than 200"
} pages was reviwed by goodreads and this is the score it got ${
  goodreads.rating
}`;
console.log(summary);
console.log(newGenres);
*/

const books = getBooks();
books;
const arr = [1, 2, 3, 4, 5];
//Arrow function explicit return
const mapFunc = arr.map((par) => {
  return par * 2;
});
//Arrow function implicit return
const mapFunc2 = arr.map((par) => par * 2);
console.log(mapFunc);
console.log(mapFunc2);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  const { title, author } = book;
  return {
    title: title,
    author: author,
  };
});

console.log(essentialData);

const longBooks = books.filter((book) => book.pages > 200);
console.log(longBooks);

const filteredBooks = books
  .filter((book) => {
    if (book.pages > 500) {
      return true;
    }
    if (book.genres.length > 3) {
      return true;
    } else {
      return false;
    }
  })
  .map((book) => {
    return {
      title: book.title,
      author: book.author,
      pages: book.pages,
    };
  })
  .sort((a, b) => a.pages - b.pages);
filteredBooks;

const allPages = filteredBooks.reduce((acc, book) => acc + book.pages, 0);
allPages;
const newArr = filteredBooks.map((el) => el).sort((a, b) => a - b);
newArr;

let body;
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => console.log(data));
