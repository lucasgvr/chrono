import { useWatches } from "../../hooks/useWatches"
import { WatchCard } from "../WatchCard"

import "./styles.scss"

export function Products() {
    const { watches } = useWatches()
    
    return (
        <div id="products">
            {watches.map(watch => (
                <WatchCard
                    key={watch.id}
                    id={watch.id}
                    image={watch.image}
                    description={watch.description}
                    price={watch.price}
                />
            ))}
        </div>
    )
}