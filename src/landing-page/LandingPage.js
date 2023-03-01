import "./landing-page.sass";
import Navbar from "../navbar/Navbar";
import FirstBoard from "./carousel-items/firstBoard/FirstBoard";

export default function LandingPage() {
    return <>
        <div className="grid-container">
            <header className="grid-item">
                <Navbar/>
            </header>
            <main className="grid-item">
                <div className="carousel">
                    <FirstBoard />
                </div>
                <div>
                    Blog
                </div>
            </main>
            <footer className="grid-item">

            </footer>
        </div>
    </>
}