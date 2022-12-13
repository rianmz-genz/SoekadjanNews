import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const data = { id: props.myNews.id, title, description, category };
    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div className="min-h-screen bg-white">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <form
                    onSubmit={handleSubmit}
                    className="max-w-7xl mx-auto sm:px-6 lg:px-8"
                >
                    <h1 className="text-black font-bold ml-8">Edit News</h1>
                    <div className="p-6 bg-white border-b border-gray-200 text-black">
                        <input
                        required
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(title) => setTitle(title.target.value)}
                            defaultValue={props.myNews.title}
                        />
                        <input
                        required
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            defaultValue={props.myNews.description}
                        />
                        <input
                        required
                            type="text"
                            placeholder="Kategori"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            defaultValue={props.myNews.category}
                        />
                        <button className="btn btn-primary m-2" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
        </div>
    );
}
