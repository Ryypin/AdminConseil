import { HeaderTarifs } from "../sections/HeaderTarifs"
import { SectionLocation } from "../sections/SectionLocation"
import { Helmet } from 'react-helmet';
import Logo from '../assets/images/logo_color.png'

export function Tarifs() {
    return (
        <>
            <Helmet>
                <title>Tarifs | AdminConseil</title>
                <meta name="description" content="Découvrez comment nous calculons nos tarifs chez AdminConseil. Nous offrons des prix transparents et compétitifs pour nos services de coaching et nos locations." />
        
                {/* Meta tags pour le partage sur les réseaux sociaux */}
                <meta property="og:title" content="Découvrez nos tarifs | AdminConseil" />
                <meta property="og:description" content="Découvrez comment nous calculons nos tarifs chez AdminConseil. Nous offrons des prix transparents et compétitifs pour nos services de coaching et nos locations." />
                <meta property="og:image" content={Logo} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Découvrez nos tarifs | AdminConseil" />
                <meta name="twitter:description" content="Découvrez comment nous calculons nos tarifs chez AdminConseil. Nous offrons des prix transparents et compétitifs pour nos services de coaching et nos locations." />
                <meta name="twitter:image" content={Logo} />
            </Helmet>
            <HeaderTarifs />
            <SectionLocation />
        </>
    )
}