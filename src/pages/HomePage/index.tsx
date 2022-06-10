import { Banner } from "../../components/Banner";
import { Featured } from "../../components/Featured";
import { Discover } from "../../components/Discover";

export function HomePage() {
    return (
        <>
            <Banner />
            <Featured />
            <Discover />
        </>
    )
}