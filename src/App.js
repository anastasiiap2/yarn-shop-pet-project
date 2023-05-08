import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";
import ItemList from "./components/ItemList/ItemList";
import Cart from "./components/Cart/Cart";
import {acrylic, mohair, cotton, silk, wool, merino, polyester, alpaca, knittingNeedles, crochetHooks, auxiliaryTools} from "./components/ItemList/detailsObjects";
import ItemPage from "./components/ItemPage/ItemPage";
import Footer from "./components/Footer/Footer";
import {useState, useEffect} from "react";
function App() {
  const [cart, setCart] = useState(() => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error){
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleProductAdd = (newProduct) => {
    // let updatedCart = cart.map(product => {
    //   if (product.id === newProduct.id && product.option === newProduct.option) {
    //     return {...product, quantity: product.quantity + newProduct.quantity}
    //   }
    //   return product
    // })
    // if (JSON.stringify(updatedCart) === JSON.stringify(cart)) {
    //   setCart([...cart, newProduct])
    // } else {
    //   setCart(updatedCart)
    // }

    let existingProduct = cart.find(product => product.id === newProduct.id && product.option === newProduct.option)
    if (existingProduct) {
      let updatedCart = cart.map(product => {
        if (product === existingProduct) {
          return {...product, quantity: product.quantity + newProduct.quantity}
        }
        return product
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, newProduct])
    }
  }

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
      <Route path="/cart" element={<Cart />}/>
      <Route path="/items/:id" element={<ItemPage cart={cart} onProductAdd={handleProductAdd}/>}/>
    </Routes>
  </BrowserRouter>
    <Footer/>
    </>
}

export default App;
