import { Link } from "react-router-dom"
import Subtitle from "../components/Subtitle"

export function SectionServices() {
    const services = [
        { 
            name: 'Gestion locative', 
            text: 'La gestion d’une location saisonnière est exigeante, surtout en termes de réactivité et de disponibilité. En nous confiant la gestion intégrale de votre bien.',
            href: '/services',
            img: '/src/assets/images/house_icon.png'
        },
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
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                        {services.map((item, index) => (
                            // Utilisation de la clé (key) pour aider React à identifier chaque élément de manière unique
                            <div key={index} className='p-4 bg-white shadow-md rounded-xl text-lg font-medium text-center'>
                                <div className="flex flex-col items-center"><img src={item.img} alt="" /></div>
                                <h3 className="h3 mb-4">{item.name}</h3>
                                <p className="mb-4">{item.text}</p>
                                <Link className="link" to={item.href}>En savoir plus</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}