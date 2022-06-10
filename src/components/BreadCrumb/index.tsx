import FilterIcon from "../../assets/filterIcon.svg"

import "./styles.scss"

export function BreadCrumb() {
    return (
        <div id="breadcrumb">
            <nav>
               <p>Rolex</p>
               <p>Cartier</p>
               <p>Tag Heuer</p>
               <p>More...</p>
            </nav>
            <button>
                <img src={FilterIcon} alt="" />
                <p>Filters</p>
            </button>
        </div>
    )
}