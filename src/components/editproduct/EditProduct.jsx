import { BsFillArrowRightCircleFill, BsBoxArrowInDown } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { RiFileCopyLine } from "react-icons/ri";
import Trash from "../../assets/icons/trash";
import "./editproduct.css";
import { Tab, Tabs } from "react-bootstrap";
import EditTab from "./EditTab";
import EditPrice from "./EditPrice";
import EditImage from "./EditImage";

const EditProduct = () => {
  return (
    <div id="editproduct">
      <div className="header-edit">
        <div className="title">
          <h5>ویرایش محصول میلگرد فولاد مبارکه</h5>
          <button className="btn">
            <BsFillArrowRightCircleFill /> بازگشت به لیست محصولات
          </button>
        </div>
        <div className="buttons">
          <button className="btn btn-secondary">
            <AiOutlineEye /> پیش نمایش
          </button>
          <button className="btn btn-primary">
            <BsBoxArrowInDown /> ذخیره
          </button>
          <button className="btn btn-primary">
            <BsBoxArrowInDown /> ذخیره و ادامه ویرایش
          </button>
          <button className="btn btn-success">
            <RiFileCopyLine /> کپی از محصول
          </button>
          <button className="btn btn-danger">
            <Trash /> حذف
          </button>
        </div>
      </div>

      <Tabs
        defaultActiveKey="Home"
        id="uncontrolled-tab-example"
        className="tabs mb-3"
      >
        <Tab eventKey="home" title="استاندارد">
          <EditTab />
        </Tab>
      </Tabs>

      <EditPrice />
      <EditImage />
    </div>
  );
};

export default EditProduct;
