import React, { useMemo, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Select from "react-select";
import { MdErrorOutline } from "react-icons/md";
import { FormCheck } from "react-bootstrap";
import "./edittab.css";
import TextEditor from "../../../layout/TextEditor";

const EditTab = ({ item, product }) => {
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

  return (
    <div id="edittab">
      <div className="item-edittab">
        <div className="title">
          <label>عنوان</label>
          <MdErrorOutline />
        </div>
        <input
          type="text"
          // onChange={(e) => setEditTitleOne(e.target.value)}
          // value={editTitleOne}
        />
      </div>
      <div className="item-edittab">
        <div className="title">
          <label>توضیحات کامل</label>
          <MdErrorOutline />
        </div>
        <TextEditor
        // id={item.id}
        // setEditText={setEditText}
        // text={item.description}
        // items={items}
        // setItems={setItems}
        />
      </div>
      <div className="item-edittab">
        <div className="title">
          <label>منتشر شده</label>
          <MdErrorOutline />
        </div>
        <FormCheck type="switch" id="custom-switch" />
      </div>
      <div className="item-edittab">
        <div className="title">
          <label>برچسب بلاگ</label>
          <MdErrorOutline />
        </div>
        <Select closeMenuOnSelect={false} isMulti options={options} />
      </div>
      <div className="date-edit">
        <div className="item-edittab">
          <div className="title">
            <label>تاریخ شروع</label>
            <MdErrorOutline />
          </div>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={(value) => changeDate(value)}
            value={date}
          />
        </div>
        <div className="item-edittab">
          <div className="title">
            <label>تاریخ پایان</label>
            <MdErrorOutline />
          </div>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={(value) => changeDate(value)}
            value={date}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTab;
