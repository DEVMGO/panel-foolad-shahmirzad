import { BsFillArrowRightCircleFill, BsBoxArrowInDown } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { RiFileCopyLine } from "react-icons/ri";
import Trash from "../../assets/icons/trash";
import { Tab, Tabs } from "react-bootstrap";
import EditTab from "./EditTab";
import EditPrice from "./EditPrice";
import EditImage from "./EditImage";
import "./editproduct.css";
import { useEffect, useState } from "react";
import { DataProducts } from "../../data/data";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { products } = useParams();
  const model = {products};
  const [product, setProduct] = useState([]);
  function SelectPro() {
    const handlePro = DataProducts.filter((item) => item.id == "p1");
    setProduct(handlePro);
  }

  useEffect(() => {
    SelectPro()
  }, []);

  return (
    <div id="editproduct">
      {product.map((item, i) => (
        <div key={i}>
          <div className="header-edit">
            <div className="title">
              <h5>ویرایش {item.name}</h5>
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
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="tabs mb-3"
          >
            <Tab eventKey="home" title="استاندارد">
              <EditTab data={item} model={model} />
            </Tab>
          </Tabs>

          <EditPrice />
          <EditImage />
        </div>
      ))}
    </div>
  );
};

export default EditProduct;
