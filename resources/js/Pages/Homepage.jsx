import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-white pb-8">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-around container relative items-start">
                <div className="flex flex-col justify-center items-center w-7/12">
                    <NewsList news={props.news.data} />
                </div>
                <aside className="w-4/12 min-h-screen p-8 border-l border-gray-300/40 sticky top-6">
                    <h1 className="text-2xl font-semibold">
                        Siapa yang membuat?
                    </h1>
                    <ul>
                        <li>Adrian Aji Septa</li>
                    </ul>
                </aside>
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
