import { useWatches } from "../../hooks/useWatches"

import { WatchCard } from "../WatchCard"

import PlusIcon from "../../assets/PlusIcon.svg"

import "./styles.scss"
import { useNavigate } from "react-router-dom"

export function ListedWatches() {
    const { watches } = useWatches()

    const navigate = useNavigate()

    return (
        <div id="listedWatches">
            <div className="title">
                <h1>Listed Watches</h1>
                <button onClick={() => navigate("/sell/new")}>
                    <img src={PlusIcon} alt="" />
                    <p>Sell</p>
                </button>
            </div>
            <div className="container">
                {watches.map(watch => {
                    if(watch.seller === "Lucas")
                    return (
                        <div className="listedWatch">
                            <WatchCard
                                key={watch.id}
                                id={watch.id}
                                image={watch.image}
                                description={watch.description}
                            />
                            <div className="buttons">
                                <button>Modify</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}