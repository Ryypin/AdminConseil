import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <Navigation />
                <main className="mt-16 md:mt-20">
                    <Outlet />
                </main>
            <Footer />
        </>
    )
}