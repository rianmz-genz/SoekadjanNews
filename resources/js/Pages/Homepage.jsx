import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props){
    return(
        <div className='min-h-screen bg-white'>
            <Head title={props.title}/>
            <Navbar user={props.auth.user} />
            <div className='flex flex-col justify-center items-center gap-4 lg:flex-row lg:flex-wrap lg:items-stretch'>
                <NewsList news={props.news.data} />
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    )
}