import { useWatches } from "../../hooks/useWatches"

import { WatchCard } from "../WatchCard"

import "./styles.scss"

export function Featured() {
    const { watches } = useWatches()

    return (
        <div id="featured">
            <h1>Latest on the <br/> Property Listing</h1>
            <div className="container">
                {watches.map(watch => {
                    if(watch.featured === true)
                    return (
                        <WatchCard
                            key={watch.id}
                            id={watch.id}
                            image={watch.image}
                            description={watch.description}
                            price={watch.price}
                        />
                )})}
            </div>
        </div>
    )
}