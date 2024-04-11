import Logo from '../assets/images/logo_color.png'
import { Link } from "react-router-dom"

export function Footer() {
    const navigations = [
        { name: 'Coaching', href: '/coaching' },
        { name: 'Nos locations', href: '/locations' }
    ];

    return (
        <>
            <footer className="px-4 md:px-0 py-8 border-t-2 border-light">
                <div className="container flex flex-col md:flex-row justify-between">
                    <div className='text-center md:text-left mb-10 md:mb-0'>
                        <p className="h3 mt-0">Contact</p>
                        <p>06 84 59 30 32</p>
                        <a className="link" href="mailto:cathy.testelmans@gmail.com">cathy.testelmans@gmail.com</a>
                    </div>
                    <div className='flex flex-col items-center md:items-end gap-4'>
                        <Link to="/">
                            <img className='h-10 md:h-14' src={Logo} alt="" />
                        </Link>
                        <ul className='py-4 w-full md:w-fit md:py-0 flex flex-col md:flex-row flex-wrap items-center md:gap-10'>
                            {/* Utilisation de la méthode map() pour itérer sur les éléments du tableau */}
                            {navigations.map((item, index) => (
                                // Utilisation de la clé (key) pour aider React à identifier chaque élément de manière unique
                                <li key={index} className='py-2 text-lg font-medium text-center'>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}