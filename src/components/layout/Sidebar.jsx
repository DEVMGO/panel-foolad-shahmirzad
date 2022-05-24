import { BsChevronDown } from "react-icons/bs";
import Dashboard from '../../assets/icons/dashboard';
import Cart from '../../assets/icons/cart';
import People from '../../assets/icons/people';
import Postcard from '../../assets/icons/postcard';
import Setting from '../../assets/icons/setting';
import Chart from '../../assets/icons/chart';
import Logo from "../../assets/img/logo.png";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [showSub, setShowSub] = useState(null)
  const ShowData = (id) => {
    if (id == showSub) {
      return setShowSub(null)
    }
    setShowSub(id)
  }
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="list-items">
        <li className="itemorigin">
          <a href="/"><Dashboard /> داشبورد</a>
        </li>
        <li className="item" onClick={() => setShowSub("product")}>
          <a href="/product" ><Cart /> محصولات</a> <BsChevronDown />
        </li>
        {showSub == "product" ?
          <div className="sub-items">
            <a>سفارشات</a>
            <a>فروش</a>
            <a>درخواست ها</a>
          </div>
          : ""}
        <li className="item"><a><People /> مشتری</a> <BsChevronDown /></li>
        <li className="item"><a><Postcard /> مدیریت محتوا</a> <BsChevronDown /></li>
        <li className="item"><a><Chart /> گزارش ها</a> <BsChevronDown /></li>
        <li className="item"><a><Setting /> تنظیمات</a> <BsChevronDown /></li>
      </ul>
    </div>
  );
};

export default Sidebar;
