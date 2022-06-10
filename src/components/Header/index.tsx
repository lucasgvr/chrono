import { useNavigate } from "react-router-dom"

import HamburguerIcon from "../../assets/MenuIcon.svg"
import UserIcon from "../../assets/UserIcon.svg"

import "./styles.scss"

export function Header() {
    const navigate = useNavigate()

    return (
        <div id="header">
            <h1 onClick={() => navigate("/")}>LOGO</h1>
            <nav>
                <p onClick={() => navigate("/find")}>Find a Watch</p>
                <p>Share Stories</p>
                <p>Rental Guides</p>
                <p>Download Mobile App</p>
                <p onClick={() => navigate("/sell")}>Sell a Watch</p>
            </nav>
            <div>
                <button>
                    <img src={HamburguerIcon} alt="Open Menu" />
                </button>
                <button>
                    <img src={UserIcon} alt="User Icon" />
                </button>
            </div>
        </div>
    )
}