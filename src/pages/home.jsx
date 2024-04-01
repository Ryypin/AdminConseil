import { HeaderHome } from "../sections/HeaderHome"
import { SectionServices } from "../sections/SectionServices"
import { SectionWho } from "../sections/SectionWho"
import { SectionLocation } from "../sections/SectionLocation"

export function Home() {
    return (
        <>
            <HeaderHome />
            <SectionServices />
            <SectionWho />
            <SectionLocation />
        </>
    )
}