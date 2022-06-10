import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { Newsletter } from "./components/Newsletter"
import { Footer } from "./components/Footer"

import { HomePage } from "./pages/HomePage"
import { ProductsPage } from "./pages/ProductsPage"
import { SellPage } from "./pages/SellPage"
import { WatchPage } from "./pages/WatchPage"
import { SellNewPage } from "./pages/SellNewPage"

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/find" element={ <ProductsPage /> } />
                <Route path="/sell" element={ <SellPage /> } />
                <Route path="/watch/:id" element={ <WatchPage /> } />
                <Route path="/sell/new" element={ <SellNewPage /> } />
            </Routes>

            <Newsletter />
            <Footer />
        </BrowserRouter>
    )
}

export default App
