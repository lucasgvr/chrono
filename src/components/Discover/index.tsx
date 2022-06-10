import CollectionImg from "../../assets/collection.jpg"

import "./styles.scss"

export function Discover() {
    return (
        <div id="discover">
            <h1>Discover More About <br/> Property Rental</h1>
            <div className="container">
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Voluptas esse nam perspiciatis eaque veniam qui illo quidem, reprehenderit impedit. <br />Reiciendis similique consequuntur soluta voluptas quae aliquam consequatur. Nesciunt, id error?<br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Voluptas esse nam perspiciatis eaque veniam qui illo quidem, reprehenderit impedit. <br />Reiciendis similique consequuntur soluta voluptas quae aliquam consequatur. Nesciunt, id error?<br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Voluptas esse nam perspiciatis eaque veniam qui illo quidem, reprehenderit impedit. <br />Reiciendis similique consequuntur soluta voluptas quae aliquam consequatur. Nesciunt, id error?</p>
                    <button>Discover More</button>
                </div>
                <div className="image">
                    <img src={CollectionImg} alt="" />
                </div>
            </div>
        </div>
    )
}