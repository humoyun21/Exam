import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { Footer, Header, Navbar } from "./components"
import AddtoCard from "./components/addCart/AddtoCard"
import Favourites from "./components/favourite/Favourites"
import BlushCard from "./components/blush'/BlushCard"
import BronzerCard from "./components/bronzer/BronzerCard"
import EyeBrow from "./components/eyeBrow/EyeBrow"
import Eyeliner from "./components/eyeLiner/EyeLiner"
import EyeShadow from "./components/eyeShadow/EyeShadow"
import Foundation from "./components/foundation/Foundation"
import LipLiner from "./components/lipLiner/LipLiner"
import Mascara from "./components/mascara/Mascara"
import NailPolish from "./components/nailpolish/NailPolish"
import SearchPage from "./components/search/SearchPage"
import Lipstick from "./components/lipstick/Lipstick"
import SingleProduct from "./components/singleProduct/SingleProduct"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<AddtoCard />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/nested_page/:id" element={<SingleProduct />} />
          <Route path="/blush" element={<BlushCard />} />
          <Route path="/bronzer" element={<BronzerCard />} />
          <Route path="/eyebrow" element={<EyeBrow />} />
          <Route path="/eyeliner" element={<Eyeliner />} />
          <Route path="/eyeshadow" element={<EyeShadow />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/lip_liner" element={<LipLiner />} />
          <Route path="/lipstick" element={<Lipstick />} />
          <Route path="/mascara" element={<Mascara />} />
          <Route path="/nail polish" element={<NailPolish />} />
          <Route path="/search/:id" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
