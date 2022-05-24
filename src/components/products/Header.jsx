import { Dropdown } from "react-bootstrap";
import Import from "../../assets/icons/import";
import Export from "../../assets/icons/export";
import Trash from "../../assets/icons/trash";
import "./header.css";

const Header = () => {
  return (
    <div id="header-products">
      <h5>محصولات</h5>
      <div className="buttons">
        <button className="btn btn-primary">مورد جدید</button>
        <button className="btn btn-success"><Import /> وارد کردن (Import)</button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Export /> Export
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">استخراج XML (همه)</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              استخراج XML (موارد انتخاب شده)
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              استخراج به اکسل (موارد انتخاب شده)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-danger"><Trash /> حذف (موارد انتخاب شده)</button>
      </div>
    </div>
  );
};

export default Header;
