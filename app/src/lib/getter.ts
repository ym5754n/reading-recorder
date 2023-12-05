import prisma from "./prisma";
import type { FetchedBook } from "@/types/FetchedBook";
import type { FetchedBooks } from "@/types/FetchedBooks";

export async function getAllReviews() {
    return await prisma.reviews.findMany({
        orderBy: {
            read: 'desc'
        }
    });
};

export function createBook(book: FetchedBook) {
    const authors = book.volumeInfo.authors;
    const price = book.saleInfo.listPrice;
    const img = book.volumeInfo.imageLinks;
    return {
        id: book.id,
        title: book.volumeInfo.title,
        author: authors ? authors.join(',') : '',
        price: price ? price.amount : 0,
        publisher: book.volumeInfo.publisher,
        published: book.volumeInfo.publishedDate,
        image: img ? img.smallThumbnail : '/vercel.svg',
    };
}

export async function getBooksByKeyword(keyword: string) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`);
    const result = await res.json() as FetchedBooks;
    const books = [];
    for (const b of result.items) {
        books.push(createBook(b));
    }
    return books;
}

export async function getBookById(id: string) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const result = await res.json() as FetchedBook;
    return createBook(result);
}

export async function getReviewById(id: string) {
    return await prisma.reviews.findUnique({
        where: {
            id: id
        }
    });
}