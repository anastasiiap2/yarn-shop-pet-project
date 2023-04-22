import logo from "../../assets/images/logo_main.png";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./navbar.sass";

export default function Navbar() {
    const [isActive, setActive] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const toggleMenuButton = () => {
        setActive(!isActive)
        setIsShown(false)
    }

    const toggleYarnButton = () => {
        isActive && setIsShown(!isShown)
    }

    return <>
        <nav className="navbar-container flex-container">
            <div className="flex-item logo-div">
                <a href="/"><img src={logo} alt="Logo icon" width="512" height="512" id="logo-img"/></a>
                <svg width="100" height="100">

                </svg>
            </div>
            <button className="menu-btn" onClick={toggleMenuButton}>
                Menu
            </button>
            <div className={isActive ? "visible flex-item nav-list" : "flex-item nav-list"}>
                <Link to="/crochet-hooks" className={isActive ? "visible nav-links" : "nav-links"} onClick={toggleMenuButton}>
                    Crochet hooks
                </Link>
                <Link to="/auxiliary-tools" className={isActive ? "visible nav-links" : "nav-links"} onClick={toggleMenuButton}>
                    Auxiliary tools
                </Link>
                <Link to="/knitting-needles" className={isActive ? "visible nav-links" : "nav-links"} onClick={toggleMenuButton}>
                    Knitting needles
                </Link>
                <div className={isActive ? "visible nav-links yarn-div" : "nav-links yarn-div"}>
                    <button onClick={toggleYarnButton} className={isActive ? "visible yarn-btn nav-links" : "yarn-btn nav-links"}>Yarns</button>
                    <div className={isShown ? "shown yarn-dropdown" : "yarn-dropdown"}>
                        <Link to="/yarn/acrylic-yarn" className={isShown ? "yarn-link nav-links" : "nav-links"} onClick={toggleMenuButton}>Acrylic yarn</Link>
                        <Link to="/yarn/mohair-yarn" className={isShown ? "yarn-link nav-links" : "nav-links"} onClick={toggleMenuButton}>Mohair yarn</Link>
                        <Link to="/yarn/cotton-yarn" className={isShown ? "yarn-link nav-links" : "nav-links"} onClick={toggleMenuButton}>Cotton yarn</Link>
                        <Link to="/yarn/polyester-yarn" className={isShown ? "yarn-link nav-links" : "nav-links"} onClick={toggleMenuButton}>Polyester yarn</Link>
                        <Link to="/yarn/alpaca-yarn" className={isShown ? "yarn-link nav-links" : "nav-links"} onClick={toggleMenuButton}>Alpaca yarn</Link>
                    </div>
                 </div>
            </div>
        </nav>
    </>
}