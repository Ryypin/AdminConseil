import React, { useState } from 'react';

const Filter = ({ filters, images }) => {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleClick = (filter) => {
        setSelectedFilter(filter === 'Tous' ? null : filter);
    };

    const filteredImages = selectedFilter ? images.filter(image => image.category === selectedFilter) : images;

    return (
        <div>
            <div className="flex flex-col items-start">
                <ul className='py-4 px-8 flex flex-row items-center text-lg gap-20 bg-white rounded shadow-md w-fit mx-auto'>
                    <li className={selectedFilter === null ? 'font-bold cursor-pointer' : 'cursor-pointer'} onClick={() => handleClick('Tous')}>Tous</li>
                    {filters.map(filter => (
                        <li key={filter} className={selectedFilter === filter ? 'font-bold cursor-pointer' : 'cursor-pointer'} onClick={() => handleClick(filter)}>{filter}</li>
                    ))}
                </ul>
            </div>
            <div>
                {filteredImages.map(image => (
                    <img key={image.id} src={image.url} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

export default Filter;