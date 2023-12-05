'use client';

import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

export default function BooksLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const txtKeyword = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        router.push(`/books/${txtKeyword.current?.value}`);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSearch();
    }

    return (
        <>
        <form className="mt-2 mb-4" onSubmit={handleSubmit}>
            <input 
                type="text"
                ref={txtKeyword}
                className="bg-gray-100 text-blank border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:outline-none focus:border-red-500" />
            <button
                type="submit"
                // onClick={handleSearch}
                className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500">
                    検索
            </button>
        </form>
        <hr />
        {children}
        </>
    );
}