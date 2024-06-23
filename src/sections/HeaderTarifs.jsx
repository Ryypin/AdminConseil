import ContactButton from "../components/ContactButton";

export function HeaderTarifs() {
    return (
        <>
            <section className="!pt-8 md:!pt-20 overflow-visible relative">
                <div className="container flex flex-row">
                    <div className="md:basis-9/12 relative z-10">
                        <h1 className="h1">Tarifs</h1>
                        <div className="bg-secondary w-20 h-1 rounded mb-7"></div>
                        <div className="content mb-6">
                            <p>
                                Chaque propriété a ses spécificités propres et les exigences de chaque propriétaire diffèrent. 
                                Par conséquent, nous considérons qu’il est important de vous rencontrer pour discuter de vos besoins spécifiques et nous permettre d’établir un devis qui répondra pleinement à vos attentes. 
                                N'hésitez pas à nous contacter si vous souhaitez en savoir davantage sur les services que nous offrons et sur notre méthode de travail.
                            </p>
                            <p>
                                N'hésitez pas à nous contacter si vous souhaitez en savoir davantage sur les services que nous offrons et sur notre méthode de travail.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ContactButton text="Contactez-nous" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}