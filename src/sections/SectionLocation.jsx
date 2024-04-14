import Subtitle from "../components/Subtitle"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css'
import Button from "../components/Button"
import locations from '../../data/locations'

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
            <section className="bg-primary">
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
                                        <div className='card h-full'>
                                            <div className="flex flex-col items-center">
                                                <div className="w-full h-[300px] relative overflow-hidden">
                                                    <img className="absolute left-0 right-0 top-0" src={'/src/assets/images/location_'+location.id+'.png'} alt="" />
                                                </div>
                                                <div className="bg-white text-white w-full px-5 py-2 rounded-2xl rounded-t-none flex flex-row items-center justify-between">
                                                    <div>
                                                        <h3 className="h4 text-primary md:h3 !m-0">{location.name}</h3>
                                                        <p className="m-0 text-dark">{location.person}</p>
                                                    </div>
                                                    <div>
                                                        <Button text="En savoir plus" type="info"  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </SplideTrack>
                        </div>
                    </Splide>
                </div>
            </section>
        </>
    )
}