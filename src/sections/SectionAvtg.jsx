import Subtitle from "../components/Subtitle"

export function SectionAvtg() {
    return (
        <>
            <section className="px-0">
                <div className="px-4 md:px-0">
                    <div className="container">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                            <div>
                                <Subtitle text="Les avantages" type="normal" />
                                <div className="content text-dark flex flex-col gap-6 md:flex-row items-start md:gap-10">
                                    <div className="flex flex-col items-start gap-6 w-full basis-6/12">
                                        <div className="bg-primary px-8 py-6 rounded-xl text-white">
                                            <p><span className="font-bold">1. Gain de temps précieux :</span> nous vous aidons à éviter les erreurs coûteuses et les tâtonnements. Vous progresserez rapidement en générant des revenus sans perdre de temps.</p>
                                        </div>
                                        <div className="bg-primary px-8 py-6 rounded-xl text-white">
                                            <p><span className="font-bold">2. Expertise technique :</span> si vous n'êtes pas à l'aise avec les plateformes de réservation, nous vous guiderons à travers les aspects techniques tout en vous montrant comment créer des annonces attractives et bien positionnées.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-6 w-full basis-6/12 md:mt-10">
                                        <div className="bg-primary px-8 py-6 rounded-xl text-white">
                                            <p><span className="font-bold">3. Maximisation de vos profits :</span> nous évaluons la rentabilité potentielle de votre projet en vous aidant à optimiser votre tarification et à minimiser les dépenses superflues.</p>
                                        </div>
                                        <div className="bg-primary px-8 py-6 rounded-xl text-white">
                                            <p><span className="font-bold">4. Objectivité extérieure :</span> nous apporterons un oeil extérieur et objectif afin que vous puissiez améliorer si nécessaire la qualité de votre offre.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}