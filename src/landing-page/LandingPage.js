import "./landing-page.sass";
import Navbar from "../components/Navbar/Navbar";
import FirstBoard from "./carousel-items/firstBoard/FirstBoard";
import Footer from "../components/Footer/Footer";

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
                <div id="test">
                    Blog
                </div>
            </main>
            <footer className="grid-item">
                {/*<Footer/>*/}
            </footer>
        </div>
    </>
}