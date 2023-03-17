import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import KnittingNeedles from "./shop-page/KnittingNeedles";
import CrochetHooks from "./shop-page/CrochetHooks"
import LandingPage from "./landing-page/LandingPage";

function App() {
  return <><BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/knitting-needles" element={<KnittingNeedles />} />
      <Route path="/crochet-hooks" element={<CrochetHooks />} />
    </Routes>
  </BrowserRouter>
    </>
}

export default App;
