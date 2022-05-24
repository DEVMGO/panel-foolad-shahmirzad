import { MdErrorOutline } from "react-icons/md";
import "./editprice.css";

const EditPrice = () => {
  return (
    <div id="editprice">
      <h5 className="title-price">$ قیمت</h5>
      <div className="items">
        <div className="item-edittab">
          <div className="title">
            <label>قیمت محصول</label>
            <MdErrorOutline />
          </div>
          <input type="number" />
          <span>تومان</span>
        </div>
        <div className="item-edittab">
          <div className="title">
            <label>حداقل تعداد سبد</label>
            <MdErrorOutline />
          </div>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default EditPrice;
