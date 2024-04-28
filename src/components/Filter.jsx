import { useState } from 'react';
import { Link } from "react-router-dom"

const Filter = ({ filters, images }) => {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleClick = (filter) => {
        setSelectedFilter(filter === 'Tous' ? null : filter);
    };

    const filteredImages = selectedFilter ? images.filter(image => image.category === selectedFilter) : images;

    return (
        <div>
            <div className="flex flex-col items-start mb-8">
                <ul className='grid grid-cols-2 md:grid-cols-4 py-4 px-4 md:px-8 text-lg gap-8 md:gap-20 bg-primary rounded-xl shadow-md w-full md:w-fit mx-auto'>
                    <li className={selectedFilter === null ? 'font-bold text-orange cursor-pointer' : 'cursor-pointer text-white'} onClick={() => handleClick('Tous')}>Tous</li>
                    {filters.map(filter => (
                        <li key={filter} className={selectedFilter === filter ? 'font-bold text-orange cursor-pointer' : 'cursor-pointer text-white'} onClick={() => handleClick(filter)}>{filter}</li>
                    ))}
                </ul>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredImages.map(image => (
                    <div key={image.id} className='basis-4/12'>
                        <div className='h-full shadow-md rounded-2xl bg-opacity-0'>
                            <div className="flex flex-col items-center">
                                <div className="w-full h-[300px] relative overflow-hidden">
                                    <img className="absolute left-0 right-0 top-0" src={image.urlImg} alt={image.alt} />
                                </div>
                                <div className="bg-primary text-white w-full px-5 py-2 rounded-2xl rounded-t-none flex flex-row items-center justify-between">
                                    <div>
                                        <h3 className="h4 !text-xl md:h3 !m-0">{image.name}</h3>
                                        <p className="m-0">{image.person}</p>
                                    </div>
                                    <div>
                                        <Link className='btn btn-orange btn-info hover:bg-white hover:text-orange' to={'/location/'+image.id}>
                                            En savoir plus
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;