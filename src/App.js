import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import Products from './components/products/Products';
import EditProducts from './components/editproduct/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/product" exact element={<Products />} />
      <Route path="/editproduct" exact element={<EditProducts />} />
    </Routes>
    </div>
  );
}

export default App;
