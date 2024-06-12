import { useParams } from 'react-router-dom'
import locations from '../../data/locations'
import Button from "../components/Button"
import ContactButton from "../components/ContactButton"
import locationIcon from '../assets/images/gps-icon.svg'
import sunIcon from '../assets/images/sun.svg'

export function SectionLocationInfos() {
    const { id } = useParams(); // Récupérer le paramètre d'URL
    const locationId = parseInt(id); // Convertir en nombre entier

    // Rechercher les données de la location correspondant à l'ID
    const locationData = locations.find(location => location.id === locationId);

    window.scrollTo(0, 0);

    return (
        <>
            <section className="!pt-8 md:!pt-20 overflow-visible relative">
                <div className="container flex flex-col-reverse md:flex-row gap-10">
                    <div className="md:basis-5/12">
                        <div className="md:w-full w-fit md:h-[450px] relative overflow-hidden rounded-2xl">
                            <img className="h-auto w-full md:h-full md:w-auto" src={locationData.urlImg} alt="" />
                        </div>
                    </div>
                    <div className="md:basis-7/12 relative z-10">
                        <h1 className="h1">{locationData.name}</h1>
                        <div className="bg-secondary w-20 h-1 rounded mb-4"></div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-6">
                            <div className='px-6 py-2 bg-primary flex flex-row items-center gap-3 w-fit rounded-full'>
                                <img className="h-6 !fill-white" src={locationIcon} alt="" />
                                <p className='text-white font-medium'>{locationData.location}</p>
                            </div>
                            {locationData.exterior && locationData.exterior.trim() !== '' && (
                                <div className='px-6 py-2 bg-primary flex flex-row items-center gap-3 w-fit rounded-full'>
                                    <img className="h-6 !fill-white" src={sunIcon} alt="" />
                                    <p className='text-white font-medium'>{locationData.exterior}</p>
                                </div>
                            )}
                        </div>
                        <div className="content mb-6">
                            <p dangerouslySetInnerHTML={{ __html: locationData.text }}></p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <ContactButton text="Contactez-nous" />
                                <a href={locationData.url}><Button text="Airbnb" type="cta" color="white" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}