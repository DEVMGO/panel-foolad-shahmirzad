import Trash from "../../../assets/icons/trash";
import "./header.css";

const Header = () => {
  return (
    <div id="header-products">
      <h5>وبلاگ</h5>
      <div className="buttons">
        <button className="btn btn-primary">مورد جدید</button>
        <button className="btn btn-danger"><Trash /> حذف (موارد انتخاب شده)</button>
      </div>
    </div>
  );
};

export default Header;
