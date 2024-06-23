import { SectionLocationInfos } from "../sections/SectionLocationInfos"
import { SectionLocation } from "../sections/SectionLocation"
import { Helmet } from 'react-helmet';
import Logo from '../assets/images/logo_color.png'

export function LocationInfo() {
    return (
        <>
            <Helmet>
                <title>Nos locations | AdminConseil</title>
                <meta name="description" content="Explorez cette magnifique location proposée par AdminConseil, idéale pour votre prochain séjour. Confort et qualité garantis !" />
        
                {/* Meta tags pour le partage sur les réseaux sociaux */}
                <meta property="og:title" content="Découvrez cette magnifique location | AdminConseil" />
                <meta property="og:description" content="Explorez cette magnifique location proposée par AdminConseil, idéale pour votre prochain séjour. Confort et qualité garantis !" />
                <meta property="og:image" content={Logo} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Découvrez cette magnifique location | AdminConseil" />
                <meta name="twitter:description" content="Explorez cette magnifique location proposée par AdminConseil, idéale pour votre prochain séjour. Confort et qualité garantis !" />
                <meta name="twitter:image" content={Logo} />
            </Helmet>
            <SectionLocationInfos />
            <SectionLocation />
        </>
    );
}