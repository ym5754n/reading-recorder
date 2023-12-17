import Link from "next/link";
import './globals.css';
import { M_PLUS_1p } from 'next/font/google';
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const fnt = M_PLUS_1p({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ書籍の記録を残すためのアプリ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
        <h1 className="text-4xl text-blue-800 dark:text-slate-300 font-bold m-5 inline-flex items-center">
        <BookOpenIcon className="w-8 h-8 mr-1" />Reading Recorder
        </h1>
        <ul className="flex bg-blue-600 dark:bg-slate-600 mb-4 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300 dark:text-slate-300" href="/">
              Home
            </Link>
          </li>
          <li className="block text-blue-300 dark:text-slate-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300 dark:text-slate-300" href="/books">
              Search
            </Link>
          </li>
        </ul>
        <div className="mx-2">
          {children}
        </div>
      </body>
    </html>
  );
}