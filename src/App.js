import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import Products from './components/products/Products';
import EditProducts from './components/editproduct/EditProduct';
import EditBlog from './components/data_entry/blog/editblog/EditBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from "./components/data_entry/blog/Blog";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:products" exact element={<Products />} />
      <Route path="/products/editproduct/:products" exact element={<EditProducts />} />
      <Route path="/blog/editproduct/:productId" exact element={<EditBlog />} />
      <Route path="/blog" exact element={<Blog />} />
    </Routes>
    </div>
  );
}

export default App;
