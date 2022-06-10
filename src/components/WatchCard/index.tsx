import { useNavigate } from "react-router-dom"

import "./styles.scss"

type WatchProps = {
    id: number,
    key: number,
    description: string,
    price?: number,
    image: string
}

export function WatchCard({ image, description, price, id } : WatchProps) {
    const navigate = useNavigate()

    return (
        <div id="watchCard" onClick={() => navigate(`/watch/${id}`)}>
            <img src={image} alt="" />
            <div>
                <h1>{description}</h1>
                {price !== 0 &&
                    <p>R${price} em até 12x com acréscimo</p>
                } 
            </div>
        </div>
    )
}