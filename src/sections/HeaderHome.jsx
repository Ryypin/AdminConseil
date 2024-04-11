import Button from "../components/Button";
import RightImg from '../assets/images/round_header_img.png';
import { useLanguage } from '../components/LanguageContext';
import labelsFr from '../labels/labels_fr';
import labelsEn from '../labels/labels_en';

export function HeaderHome() {

    const { language } = useLanguage();
    const labels = language === 'fr' ? labelsFr : labelsEn;

    return (
        <>
            <section className="!pt-16 md:!pt-32 overflow-hidden">
                <div className="container">
                    <img src={RightImg} className="absolute hidden top-2 right-0 max-w-[400px] md:block md:-top-24 md:-right-40 xl:-top-52 xl:-right-56 md:max-w-[650px] xl:max-w-max" alt="" />
                    <div className="flex flex-row items-start relative z-10">
                        <div className="basis-7/12">
                            <h1 className="h1">{labels.headerHomepage_title}</h1>
                            <div className="content mb-6">
                                <p>
                                    {labels.headerHomepage_text_1}
                                </p>
                                <p>
                                    {labels.headerHomepage_text_2}
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button text={labels.headerHomepage_cta} type="cta" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}