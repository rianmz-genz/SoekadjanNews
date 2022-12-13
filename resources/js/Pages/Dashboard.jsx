import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { set } from "lodash";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const data = { title, description, category };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        return;
    });
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-7xl mx-auto sm:px-6 lg:px-8"
                >
                    {isNotif && (
                        <div className="alert alert-success shadow-lg mb-6">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                    )}
                    <div className="p-6 bg-white border-b border-gray-200 text-black">
                        <input
                        required
                        autoFocus
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <input
                        required
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                        required
                            type="text"
                            placeholder="Kategori"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <button className="btn btn-primary m-2" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                {props.myNews && props.myNews.length > 0 ? (
                    props.myNews.map((news, i) => {
                        const { title, description, category, author, id } =
                            news;
                        return (
                            <div
                                key={i}
                                className="card w-11/12 mx-auto mt-8  shadow-xl bg-white"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {title}
                                        <div className="badge badge-secondary">
                                            NEW
                                        </div>
                                    </h2>
                                    <p>{description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">
                                            {category}
                                        </div>
                                        <div className="badge badge-outline">
                                            <Link
                                                href={route("edit.news")}
                                                method="get"
                                                as="button"
                                                data={{ id: id }}
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="badge badge-outline">
                                        <Link
                                                href={route("delete.news")}
                                                method="post"
                                                as="button"
                                                data={{ id: id }}
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="alert alert-info shadow-lg w-11/12 mt-8 mx-auto">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-current flex-shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>Tidak ada berita disini</span>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
