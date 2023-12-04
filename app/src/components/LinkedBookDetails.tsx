import Link from "next/link";
import BookDetails from "./BookDetails";
import { Book } from "@/types/Book";

type LinkedBookDetailsProps = {
    index: number
    book: Book
};

export default function LinkedBookDetails({ index, book }: LinkedBookDetailsProps) {
    return (
        <Link href={`edit/${book.id}`}>
            <div className="hover:bg-green-50">
                <BookDetails index={index} book={book} />
            </div>
        </Link>
    );
}