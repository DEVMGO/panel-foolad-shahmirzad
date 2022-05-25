import { BsFillArrowRightCircleFill, BsBoxArrowInDown } from "react-icons/bs";
import { RiFileCopyLine } from "react-icons/ri";
import Trash from "../../../../assets/icons/trash";
import { Tab, Tabs } from "react-bootstrap";
import EditTab from "./EditTab";
import EditImage from "./EditImage";
import "./editproduct.css";
import { useEffect, useState } from "react";
import { DataBlog } from "../../../../data/data";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  function SelectPro() {
    const handlePro = DataBlog.filter((item) => item.id == productId);
    setProduct(handlePro);
  }
  useEffect(() => {
    SelectPro();
  }, []);

  return (
    <div id="editproduct">
      {product.map((item) => (
        <>
          <div className="header-edit">
            <div className="title">
              <h5>ویرایش {item.title}</h5>
              <button className="btn">
                <BsFillArrowRightCircleFill /> بازگشت به لیست بلاگ
              </button>
            </div>
            <div className="buttons">
              <button className="btn btn-primary">
                <BsBoxArrowInDown /> ذخیره
              </button>
              <button className="btn btn-primary">
                <BsBoxArrowInDown /> ذخیره و ادامه ویرایش
              </button>
              <button className="btn btn-success">
                <RiFileCopyLine /> کپی از بلاگ
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
              <EditTab item={item} product={product} />
            </Tab>
          </Tabs>

          <EditImage />
        </>
      ))}
    </div>
  );
};

export default EditProduct;
