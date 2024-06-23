import { Link } from "react-router-dom"
import Subtitle from "../components/Subtitle"

export function SectionServices() {
    const services = [
        { 
            name: 'Coaching', 
            text: 'Atteignez vos objectifs avec notre coaching sur mesure. Développez vos compétences et gagnez en confiance grâce à un accompagnement stratégique et bienveillant.',
            href: '/coaching',
            img: '/src/assets/images/house_icon.png'
        },
        { 
            name: 'Nos locations', 
            text: 'Découvrez nos locations idéales pour tous vos séjours. Profitez d’espaces confortables et bien équipés pour des vacances, des déplacements ou des séjours temporaires.',
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
                            return <div key={index} className='p-4 bg-white shadow-md rounded-xl text-lg font-medium text-center md:w-6/12'>
                                <div className="flex flex-col items-center hidden">
                                    <img src={item.img} alt="" />
                                    </div>
                                <h3 className="h3 mt-0 mb-4">{item.name}</h3>
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