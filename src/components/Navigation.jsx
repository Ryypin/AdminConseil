import { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/images/logo_color.png'

export function Navigation() {
    const [selected, setSelected] = useState(false); // État pour stocker si le bloc est sélectionné ou non
    const blockRef = useRef(null); // Référence pour accéder au bloc dans le DOM

    // Classes pour le bloc en fonction de son état
    const blockClasses = selected ? 'block' : 'hidden md:block';

    // Fonction pour sélectionner le bloc et changer sa classe
    const selectBlock = () => {
        setSelected(!selected); // Mettre à jour l'état pour indiquer que le bloc est sélectionné
    };

    // Vérifier si l'écran est de petite taille (mobile)
    const isMobileScreen = window.matchMedia('(max-width: 768px)').matches;

    const navigations = [
        { name: 'Coaching', href: '/coaching' },
        { name: 'Nos locations', href: '/locations' },
        { name: 'Tarifs', href: '/tarifs' }
    ];

    // Burger menu
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        alert("Le bouton a été cliqué !");
    };

    return (
        <header className='w-full fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-light'>
            <nav className='w-full px-4 py-3 md:py-3 max-w-1280 mx-auto md:flex md:flex-row md:items-center md:justify-between'>
                <div className="md:flex md:flex-row md:items-center md:gap-10 lg:gap-20">
                    <div className='flex flex-row items-center justify-between'>
                        <Link to="/">
                            <img className='h-10' src={Logo} alt="" />
                        </Link>
                        <button className='block md:hidden' onClick={selectBlock}>
                            <div id="burger-menu" className={`burger-menu ${isOpen ? 'close' : ''}`} onClick={toggleMenu}>
                                <span></span>
                            </div> 
                        </button>
                    </div>
                    <div ref={blockRef} className={blockClasses}>
                        <ul className='py-4 md:py-0 md:flex md:flex-row md:items-center md:gap-10'>
                            {/* Utilisation de la méthode map() pour itérer sur les éléments du tableau */}
                            {navigations.map((item, index) => (
                                // Utilisation de la clé (key) pour aider React à identifier chaque élément de manière unique
                                <li key={index} className='py-2 text-lg font-medium text-center'>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            ))}
                            <li className='flex flex-col items-center md:hidden'>
                                <a href='mailto:cathy.testelmans@gmail.com' className='btn btn-orange btn-info'>
                                    Contactez-nous
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <a href='mailto:cathy.testelmans@gmail.com' className='btn btn-orange btn-info'>
                        Contactez-nous
                    </a>
                </div>
            </nav>
        </header>
    )

}