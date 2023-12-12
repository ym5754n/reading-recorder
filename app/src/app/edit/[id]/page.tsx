import BookDetails from "@/components/BookDetails";
import { getBookById, getReviewById } from "@/lib/getter";
import FormEdit from "@/components/FormEdit";

import type { Book } from "@/types/Book";

export default async function EditPage({ params }: { params: { id: string }}) {
    const book = await getBookById(params.id) as Book;
    const review = await getReviewById(params.id);
    const read = (review?.read || new Date()).toLocaleDateString('sv-SE');

    return (
        <div id="form" className="grid grid-cols-1 sm:grid-cols-2">
            <BookDetails book={book} />
            <hr className="my-4 sm:hidden" />
            <FormEdit src={{ id: book.id, read, memo: review?.memo }} />
        </div>
    );
}