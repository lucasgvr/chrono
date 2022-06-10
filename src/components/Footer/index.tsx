import InstagramIcon from "../../assets/InstagramIcon.svg"

import "./styles.scss"

export function Footer() {
    return (
        <div id="footer">
            <section className="logo">
                <h1>LOGO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rem sint porro perferendis eum quis vero soluta dolor enim nesciunt repudiandae totam necessitatibus consequuntur, asperiores fugiat. Debitis, ipsa soluta.</p>
            </section>
            <div className="company">
                <h1>COMPANY</h1>
                <div>
                    <a href="">About Us</a>
                    <a href="">Legal Information</a>
                    <a href="">Contact Us</a>
                    <a href="">Blogs</a>
                </div>
            </div>
            <div className="help">
                <h1>HELP CENTER</h1>
                <div>
                    <a href="">Find a Property</a>
                    <a href="">How To Host?</a>
                    <a href="">Why Us?</a>
                    <a href="">FAQs</a>
                    <a href="">Rental Guides</a>
                </div>
            </div>
            <div className="contact">
                <h1>CONTACT INFO</h1>
                <div>
                    <a href="">Phone: 1234567890</a>
                    <a href="">Email: company@email.com</a>
                    <a href="">Location: 100 Smart Street, LA, USA</a>
                    <div>
                        <a href="">
                            <img src={InstagramIcon} alt="Open Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}