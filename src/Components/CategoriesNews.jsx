import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaEye, FaStar } from 'react-icons/fa';

const CategoriesNews = () => {
    const newsList = useLoaderData();

    return (
        <div>
            <h2 className='font-bold text-2xl mb-6'>Dragon News Home</h2>

            <div className="space-y-6">
                {newsList.map(news => (
                    <div key={news.id} className=" rounded-lg shadow p-5">
                        {/* Author Info */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <img src={news.author.img} alt="author" className="w-10 h-10 rounded-full" />
                                <div>
                                    <h4 className="font-semibold text-sm">{news.author.name}</h4>
                                    <p className="text-gray-500 text-xs">{news.author.published_date.slice(0, 10)}</p>
                                </div>
                            </div>
                            <div className="text-gray-500 cursor-pointer">⋮</div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3">{news.title}</h3>

                        {/* Image */}
                        <img src={news.image_url} alt="thumbnail" className="w-full rounded mb-3" />

                        {/* Description */}
                        <p className="text-gray-600 text-sm">
                            {news.details.length > 200 
                                ? `${news.details.slice(0, 200)}...` 
                                : news.details}
                            <span className="text-red-500 font-semibold cursor-pointer ml-2">Read More</span>
                        </p>

                        {/* Rating and Views */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2 text-orange-400">
                                {[...Array(Math.round(news.rating.number))].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                                <span className="text-gray-600 font-semibold ml-1">{news.rating.number}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                                <FaEye />
                                <span>{news.total_view}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesNews;
