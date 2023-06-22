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
                    <h1 className="text-2xl text-center font-semibold">
                        Siapa yang membuat?
                    </h1>
                    <ul className="mt-4 space-y-3">
                        <li className="px-4 py-2 bg-gray-300/30">
                            <h1 className="text-lg font-semibold">
                                Adrian Aji Septa
                            </h1>
                            <p>22SA11A080</p>
                        </li>
                        <li className="px-4 py-2 bg-gray-300/30">
                            <h1 className="text-lg font-semibold">
                                Amar Al Farizi
                            </h1>
                            <p>22SA11A080</p>
                        </li>
                        <li className="px-4 py-2 bg-gray-300/30">
                            <h1 className="text-lg font-semibold">
                                Mutia Dwi Anggraeni
                            </h1>
                            <p>22SA11A072</p>
                        </li>
                        <li className="px-4 py-2 bg-gray-300/30">
                            <h1 className="text-lg font-semibold">
                                Anggie Maesyaroh
                            </h1>
                            <p>22SA11A086</p>
                        </li>
                        <li className="px-4 py-2 bg-gray-300/30">
                            <h1 className="text-lg font-semibold">
                                Siti Nahla Amalina
                            </h1>
                            <p>22SA21A166</p>
                        </li>
                    </ul>
                    <p className="mt-2">terimakasih buat lo semua n...</p>
                </aside>
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
