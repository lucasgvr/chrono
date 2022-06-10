import ArrowIcon from "../../assets/ArrowIcon.svg"

import "./styles.scss"

export function Newsletter() {
    return (
        <div id="newsletter">
            <section>
                <h1>NEWSLETTER</h1>
                <p>Stay Up To Date</p>
            </section>
            <div>
                <input type="text" placeholder="Your Email..." />
                <button>
                    <img src={ArrowIcon} alt="" />
                </button>
            </div>
        </div>
    )
}