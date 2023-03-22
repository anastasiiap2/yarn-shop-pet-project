import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";
import ItemList from "./components/ItemList/ItemList";
function App() {
  return <><BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/knitting-needles" element={<ItemList url="http://127.0.0.1:3000/items/knitting-needles" />} />
      <Route path="/crochet-hooks" element={<ItemList url="http://127.0.0.1:3000/items/crochet-hooks" />} />
      <Route path="/auxiliary-tools" element={<ItemList url="http://127.0.0.1:3000/items/auxiliary-tools" />}/>
      <Route path="/yarn/acrylic-yarn" element={<ItemList url="http://127.0.0.1:3000/items/acrylic-yarn"/>}/>
      <Route path="/yarn/mohair-yarn" element={<ItemList url="http://127.0.0.1:3000/items/mohair-yarn"/>}/>
      <Route path="/yarn/cotton-yarn" element={<ItemList url="http://127.0.0.1:3000/items/cotton-yarn"/>}/>
      <Route path="/yarn/polyester-yarn" element={<ItemList url="http://127.0.0.1:3000/items/polyester-yarn"/>}/>
      <Route path="/yarn/alpaca-yarn" element={<ItemList url="http://127.0.0.1:3000/items/alpaca-yarn"/>}/>
    </Routes>
  </BrowserRouter>
    </>
}

export default App;
