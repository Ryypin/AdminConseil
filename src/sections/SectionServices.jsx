import { Link } from "react-router-dom"
import Subtitle from "../components/Subtitle"

export function SectionServices() {
    const services = [
        { 
            name: 'Coaching', 
            text: 'La gestion d’une location saisonnière est exigeante, surtout en termes de réactivité et de disponibilité. En nous confiant la gestion intégrale de votre bien.',
            href: '/coaching',
            img: '/src/assets/images/house_icon.png'
        },
        { 
            name: 'Nos locations', 
            text: 'La gestion d’une location saisonnière est exigeante, surtout en termes de réactivité et de disponibilité. En nous confiant la gestion intégrale de votre bien.',
            href: '/locations',
            img: '/src/assets/images/house_icon.png'
        }
    ];

    return (
        <>
            <section>
                <div className="container">
                    <Subtitle text="Nos services" type="normal" />
                    <div className="flex flex-col items-center md:flex-row md:items-end gap-10 mx-auto">
                        {services.map((item, index) => {
                            return <div key={index} className='p-4 bg-white shadow-md rounded-xl text-lg font-medium text-center w-6/12'>
                                <div className="flex flex-col items-center"><img src={item.img} alt="" /></div>
                                <h3 className="h3 mb-4">{item.name}</h3>
                                <p className="mb-4 px-4">{item.text}</p>
                                <Link className="link" to={item.href}>En savoir plus</Link>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}