import logo from "../../assets/images/logo_main.png";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./navbar.sass";

export default function Navbar() {
    const [isActive, setActive] = useState(false);

    const toggleMenuButton = () => {
        setActive(!isActive)
    }

    return <>
        <nav className="navbar-container flex-container">
            <div className="flex-item logo-div">
                <a href="/"><img src={logo} alt="Sorry, this picture is unavailable" width="512" height="512" id="logo-img"/></a>
                <svg width="100" height="100">

                </svg>
            </div>
            <button className="dropdown-btn" onClick={toggleMenuButton}>
                Menu
            </button>
            <div className={isActive ? "visible flex-item nav-list" : "flex-item nav-list"}>
                <Link to="/crochet-hooks" className={isActive ? "visible nav-link" : "nav-link"}>
                    Crochet hooks
                </Link>
                <Link to="/auxiliary-tools" className={isActive ? "visible nav-link" : "nav-link"}>
                    Auxiliary tools
                </Link>
                <Link to="/knitting-needles" className={isActive ? "visible nav-link" : "nav-link"}>
                    Knitting needles
                </Link>
                <div to="/" className={isActive ? "visible nav-link yarn-btn" : "nav-link yarn-btn"}>
                    <div className="yarn-dropdown">
                        <span>Yarns</span>
                        <Link to="/yarn/acrylic-yarn" className="nav-link">Acrylic yarn</Link>
                        <Link to="/yarn/mohair-yarn" className="nav-link">Mohair yarn</Link>
                        <Link to="/yarn/cotton-yarn" className="nav-link">Cotton yarn</Link>
                        <Link to="/yarn/polyester-yarn" className="nav-link">Polyester yarn</Link>
                        <Link to="/yarn/alpaca-yarn" className="nav-link">Alpaca yarn</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}