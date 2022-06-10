import TagHeuerImg from "../assets/tagheuer2.jpg"
import CartierImg from "../assets/cartier2.jpg"
import CartierImg2 from "../assets/cartier.jpg"
import RolexImg from "../assets/rolex2.jpg"
import RolexImg2 from "../assets/rolex.jpg"

export function useWatches() {
    const watches = [
        {
            id: 1,
            description:  "Watch Tag Heuer 40MM Ref. 230",
            price: 12000,
            image: TagHeuerImg,
            featured: true,
            seller: "Lucas"
        },
        {
            id: 2,
            description: "Watch Cartier 32MM Ref. 1900",
            price: 24000,
            image: CartierImg,
            featured: true,
            seller: ""
        },
        {
            id: 3,
            description: "Watch Rolex 38MM Ref. 1880",
            price: 49000,
            image: RolexImg,
            featured: true,
            seller: "Lucas"
        },
        {
            id: 4,
            description: "Watch Cartier 38MM Ref. 1880",
            price: 18000,
            image: CartierImg2,
            featured: false,
            seller: ""
        },
        {
            id: 5,
            description: "Watch Rolex 38MM Ref. 1880",
            price: 32000,
            image: RolexImg2,
            featured: false,
            seller: ""
        },
    ]

    return { watches }
}