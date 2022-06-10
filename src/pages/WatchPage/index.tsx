import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useWatches } from "../../hooks/useWatches"

import "./styles.scss"

export function WatchPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { watches } = useWatches()

    const params = useParams()

    const watch = watches.find(watch => watch.id === Number(params.id))

    return (
        <div id="watchPage">
            <div className="images">
                <img src={watch?.image} alt="" />
                <div>
                    <img src={watch?.image} alt="" />
                    <img src={watch?.image} alt="" />
                    <img src={watch?.image} alt="" />
                    <img src={watch?.image} alt="" />
                </div>
            </div>
            <div className="description">
                <div className="text">
                    <div>
                        <h1>{watch?.description}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nam ab distinctio quasi. Tempora, ipsam! Doloremque nemo eveniet vero perferendis impedit consequuntur sit tempore debitis, voluptate neque, possimus hic. Sint.</p>
                    </div>
                    <div>
                        <h1>Details</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nam ab distinctio quasi. Tempora, ipsam! Doloremque nemo eveniet vero perferendis impedit consequuntur sit tempore debitis, voluptate neque, possimus hic. Sint.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nam ab distinctio quasi. Tempora, ipsam! Doloremque nemo eveniet vero perferendis impedit consequuntur sit tempore debitis, voluptate neque, possimus hic. Sint.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nam ab distinctio quasi. Tempora, ipsam! Doloremque nemo eveniet vero perferendis impedit consequuntur sit tempore debitis, voluptate neque, possimus hic. Sint.</p>
                    </div>
                </div>
                <div className="price">
                    <h1>R${watch?.price}</h1>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}