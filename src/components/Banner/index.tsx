import SearchIcon from "../../assets/SearchIcon.svg"

import "./styles.scss"

export function Banner() {
    return (
        <div id="banner">
            <div className="container">
                <div>
                    <h1>FIND</h1>
                </div>
                <div>
                    <input type="text" placeholder="Search..."/>
                    <button>
                        <img src={SearchIcon} alt="Search Icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}