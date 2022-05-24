import Header from "./Header";
import Search from "./Search";
import "./products.css";
import Tables from "./Tables";
import Table_Two from "./Table_Two";

const Products = () => {
  return (
    <div className="products">
        <Header />
        <Search />
        <Tables />
        {/* <Table_Two /> */}
    </div>
  );
};

export default Products;
