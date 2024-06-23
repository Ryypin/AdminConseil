import { HeaderCoaching } from "../sections/HeaderCoaching"
import { SectionAvtg } from "../sections/SectionAvtg"
import { SectionCoachingWho } from "../sections/SectionCoachingWho"
import { Helmet } from 'react-helmet'
import Logo from '../assets/images/logo_color.png'

export function Coaching() {

    return (
        <>
            <Helmet>
                <title>Coaching | Adminconseil</title>
                <meta name="description" content="Atteignez vos objectifs avec notre coaching sur mesure. Développez vos compétences et gagnez en confiance grâce à un accompagnement stratégique et bienveillant." />
        
                {/* Meta tags pour le partage sur les réseaux sociaux */}
                <meta property="og:title" content="Coaching | Adminconseil" />
                <meta property="og:description" content="Atteignez vos objectifs avec notre coaching sur mesure. Développez vos compétences et gagnez en confiance grâce à un accompagnement stratégique et bienveillant." />
                <meta property="og:image" content={Logo} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Coaching | Adminconseil" />
                <meta name="twitter:description" content="Atteignez vos objectifs avec notre coaching sur mesure. Développez vos compétences et gagnez en confiance grâce à un accompagnement stratégique et bienveillant." />
                <meta name="twitter:image" content={Logo} />
            </Helmet>
            <HeaderCoaching />
            <SectionAvtg />
            <SectionCoachingWho />
        </>
    )
}