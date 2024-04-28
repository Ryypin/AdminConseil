import Subtitle from "../components/Subtitle"
import Button from "../components/Button";

export function SectionCoachingWho() {
    return (
        <>
            <section className="px-0">
                <div className="px-4 md:px-0">
                    <div className="container">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                            <div className="ml-auto md:basis-8/12">
                                <Subtitle text="A qui s’adresse nos services de coaching ?" type="normal" />
                                <div className="content text-dark mb-6">
                                    <p>Que vous soyez novice dans le domaine de la location saisonnière ou que vous soyez un propriétaire expérimenté mais trop occupé pour gérer votre projet, notre service de coaching en locations saisonnières s'adapte à vos besoins spécifiques. Notre objectif est de vous aider à réussir, quelle que soit votre situation.</p>
                                    <p>Ne laissez pas les défis vous décourager ; laissez-nous vous guider vers le succès.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Button text="Contactez-nous" type="cta" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}