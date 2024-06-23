import { HeaderLocation } from "../sections/HeaderLocation"
import { SectionTopLoc } from "../sections/SectionTopLoc"
import { Helmet } from 'react-helmet';
import Logo from '../assets/images/logo_color.png'

export function Location() {
    return (
        <>
            <Helmet>
                <title>Nos locations | AdminConseil</title>
                <meta name="description" content="Explorez notre sélection de locations proposées par AdminConseil. Trouvez le lieu idéal pour votre prochain séjour avec confort et qualité assurés !" />
        
                {/* Meta tags pour le partage sur les réseaux sociaux */}
                <meta property="og:title" content="Découvrez nos locations | AdminConseil" />
                <meta property="og:description" content="Explorez notre sélection de locations proposées par AdminConseil. Trouvez le lieu idéal pour votre prochain séjour avec confort et qualité assurés !" />
                <meta property="og:image" content={Logo} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Découvrez nos locations | AdminConseil" />
                <meta name="twitter:description" content="Explorez notre sélection de locations proposées par AdminConseil. Trouvez le lieu idéal pour votre prochain séjour avec confort et qualité assurés !" />
                <meta name="twitter:image" content={Logo} />
            </Helmet>
            <HeaderLocation />
            <SectionTopLoc />
        </>
    )
}