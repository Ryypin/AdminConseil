import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css'
import locations from '../../data/locations'
import { Link } from "react-router-dom"
import peopleBlack from '../assets/images/people_dark.svg'

export function SectionLocation() {

    const options = {
        type : 'loop',
        gap : '1rem',
        focus: 'center',
        perPage : 3,
        perMove: 1,
        autoplay : false,
        pauseOnHover : true,
        resetProgress: false,
        height : '25rem',
        breakpoints: {
            1200: { perPage: 2, gap: '1rem' },
            640 : { perPage: 1, gap: '1rem' },
        },
        classes: {
            pagination: 'splide__pagination your-class-pagination -bottom-1', // container
        },
    };

    return (
        <>
            <section className="!pb-20">
                <div className="bg-primary py-12">
                    <div className="container">
                        <div className="flex flex-col items-center">
                            <h2 className="h2 text-white">
                                Nos locations
                            </h2>
                            <div className="bg-secondary w-20 h-1 rounded mb-7"></div>
                        </div>
                        <Splide
                            options={ options }
                            aria-labelledby="autoplay-example-heading"
                            hasTrack={ false }
                        >
                            <div style={ { position: 'relative' } }>
                                <SplideTrack>
                                    {locations.map((location, index) => (
                                    // Utilisation de la clé (key) pour aider React à identifier chaque élément de manière unique
                                        <SplideSlide key={index}>
                                            <div className='card'>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-full h-[250px] max-h-[250px] md:h-[300px] md:max-h-[300px] relative overflow-hidden rounded-t-3xl">
                                                        <img className="h-full w-full" src={location.urlImg} alt="" />
                                                    </div>
                                                    <div className="bg-white text-white w-full px-3 md:px-5 py-2 rounded-2xl rounded-t-none flex flex-row items-center justify-between">
                                                        <div>
                                                            <h3 className="h5 text-primary md:h4 !m-0">{location.name}</h3>
                                                            <div className="flex flex-row items-center gap-2">
                                                                <img className="h-5" src={peopleBlack} alt="" />
                                                                <p className="m-0 text-dark font-medium">{location.person}</p>
                                                            </div>
                                                        </div>
                                                        <Link className='btn btn-orange btn-info hover:bg-white hover:text-orange' to={'/location/'+location.id}>
                                                            En savoir plus
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </div>
                        </Splide>
                    </div>
                </div>
            </section>
        </>
    )
}