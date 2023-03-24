import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";
import ItemList from "./components/ItemList/ItemList";
import {acrylic, mohair, cotton, silk, wool, merino, polyester, alpaca, knittingNeedles, crochetHooks, auxiliaryTools} from "./components/ItemList/detailsObjects";
function App() {
  return <><BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/knitting-needles" element={<ItemList details={knittingNeedles} />} />
      <Route path="/crochet-hooks" element={<ItemList details={crochetHooks} />} />
      <Route path="/auxiliary-tools" element={<ItemList details={auxiliaryTools} />}/>
      <Route path="/yarn/acrylic-yarn" element={<ItemList details={acrylic}/>}/>
      <Route path="/yarn/mohair-yarn" element={<ItemList details={mohair}/>}/>
      <Route path="/yarn/cotton-yarn" element={<ItemList details={cotton}/>}/>
      <Route path="/yarn/polyester-yarn" element={<ItemList details={polyester}/>}/>
      <Route path="/yarn/alpaca-yarn" element={<ItemList details={alpaca}/>}/>
    </Routes>
  </BrowserRouter>
    </>
}

export default App;
