const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                className="w-full bg-white border-b py-4 border-gray-300/40 flex flex-row-reverse"
            >
                <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className="w-36 h-36 object-cover p-4"
                />
                <div className="p-4 flex flex-col w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 mb-3">
                            <img
                                src="https://placeimg.com/400/225/arch"
                                alt="Shoes"
                                width={1080}
                                height={1080}
                                className="object-cover w-8 h-8 rounded-full"
                            />
                            <p>{data.author}</p>
                        </div>
                        <div className="px-4 w-fit rounded-full text-xs py-2 bg-gray-300/40">
                            {data.category}
                        </div>
                    </div>

                    <h1 className="text-xl hover:underline font-semibold">
                        {data.title}
                    </h1>
                    <p className="my-2">{data.description}</p>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Saat ini tidak ada berita tersedia</div>;
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
