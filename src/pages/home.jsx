import { HeaderHome } from "../sections/HeaderHome"
import { SectionServices } from "../sections/SectionServices"
import { SectionWho } from "../sections/SectionWho"
import { SectionLocation } from "../sections/SectionLocation"
import { Helmet } from 'react-helmet';
import Logo from '../assets/images/logo_color.png'

export function Home() {
    return (
        <>
            <Helmet>
                <title>AdminConseil</title>
                <meta name="description" content="Bienvenue sur AdminConseil, votre solution pour le coaching personnalisé et les locations confortables." />
        
                {/* Meta tags pour le partage sur les réseaux sociaux */}
                <meta property="og:title" content="AdminConseil" />
                <meta property="og:description" content="Découvrez nos services de coaching et nos offres de locations confortables." />
                <meta property="og:image" content={Logo} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AdminConseil" />
                <meta name="twitter:description" content="Découvrez nos services de coaching et nos offres de locations confortables." />
                <meta name="twitter:image" content={Logo} />
            </Helmet>
            <HeaderHome />
            <SectionServices />
            <SectionLocation />
            <SectionWho />
        </>
    )
}