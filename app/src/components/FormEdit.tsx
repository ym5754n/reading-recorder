'use client';

import { useTransition } from "react";
import { addReview, removeReview } from "@/lib/actions";

export default function FormEdit({ src: { id, read, memo } }: { src: { id: string, read: string, memo?: string}}) {
    const [isPending, startTransaction] = useTransition();

    return (
        <form action={addReview} className="grid grid-cols-2 gap-2">
            <input type="hidden" name="id" defaultValue={id} />
            <div className="col-span-2">
                <label className="font-bold" htmlFor="read">読了日：</label>
                <input type="date" id="read" name="read"
                    className="block bg-gray-100 border-2 border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500
                        dark:text-slate-800 col-span-2"
                    defaultValue={read} />
            </div>
            <div className="col-span-2">
                <label className="font-bold" htmlFor="memo">感想：</label>
                <textarea id="memo" name="memo" rows={5}
                    className="block bg-gray-100 border-2 border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500
                        dark:text-slate-800 w-full"
                    defaultValue={memo}>
                </textarea>
            </div>
            <button type="submit"
                className="col-span-1 bg-blue-600 dark:bg-slate-500 text-white rounded px-4 py-2 hover:bg-blue-500 dark:hover:bg-slate-400">
                登録
            </button>
            <button type="button"
                className="col-span-1 bg-red-600 dark:bg-slate-800 text-white rounded px-4 py-2 hover:bg-red-500 dark:hover:bg-slate-700"
                onClick={() => {
                    startTransaction(() => removeReview(id));
                }}>
                削除
            </button>
        </form>
    );
}