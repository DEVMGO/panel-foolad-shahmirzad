import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Select from "react-select";
import { MdErrorOutline } from "react-icons/md";
import { FormCheck } from "react-bootstrap";
import "./edittab.css";
import TextEditor from "../layout/TextEditor";
import { Configs } from "../products/configs";

const EditTab = ({ data, model }) => {
  const [date, changeDate] = useState(new Date());
  const options = useMemo(
    () => [
      { value: "تهران", label: "همه" },
      { value: "اصفهان", label: "اصفهان" },
      { value: "خراسان شمالی", label: "خراسان شمالی" },
      { value: "فارس", label: "فارس" },
    ],
    []
  );

  const [title, setTitle] = useState()

  console.log(model)
  return (
    <div id="edittab">
      {Configs["products"]["form_fields"].map((item, i) => {
        return (
          <div className="item-edittab" key={i}>
            <div className="title">
              <label>{item.title}</label>
              <MdErrorOutline />
            </div>
            {item.type == "text" ? <>
            <input 
              type="text" 
              name={item.name}
              value={data[item.name]}
              />  
              {item.after}
             </> : ""}
            {item.type == "file" ? <input type="file" name={item.name} /> : ""}
          </div>
        )
      })}

    </div>
  );
};

export default EditTab;
