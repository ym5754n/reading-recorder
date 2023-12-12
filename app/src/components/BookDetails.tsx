import Image from 'next/image';
import { Book } from '@/types/Book';

export default function BookDetails({ index, book }: { index?: number, book: Book}) {
    return (
        <div className="grid grid-cols-3 w-full">
                <Image className="col-span-1 justify-self-center" src={book.image} alt="" width={140} height={180} />
                <ul className="col-span-2 list-none text-black dark:text-slate-200 ml-4">
                    <li>{index && index + '.'}</li>
                    <li>{book.title} ({book.price}円)</li>
                    <li>{book.author}</li>
                    <li>{book.publisher}刊</li>
                    <li>{book.published} 発売</li>
                </ul>
        </div>
    );
}