import React, { useMemo } from "react";
import Select from "react-select";
import { Accordion, FormCheck } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
import "./search.css";

const Search = () => {
  const options = useMemo (
    () => [
      { value: "تهران", label: "همه" },
      { value: "اصفهان", label: "اصفهان" },
      { value: "خراسان شمالی", label: "خراسان شمالی" },
      { value: "فارس", label: "فارس" },
    ],
    []
  );

  return (
    <div id="search">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>جستجو</Accordion.Header>
          <Accordion.Body>
            <div className="form-search row">
              <div className="col-md-6">
                <div className="item-search">
                  <div className="title">
                      <label>نام محصول</label> <MdErrorOutline />
                  </div>
                  <input type="text" />
                </div>
                <div className="item-search">
                  <div className="title">
                      <label>دسته بندی</label><MdErrorOutline />
                  </div>
                  <Select options={options} />
                </div>
                <div className="item-search">
                  <div className="title">
                      <label>تولید کننده</label><MdErrorOutline />
                  </div>
                  <Select options={options} />
                </div>
                <div className="item-search">
                  <div className="title">
                      <label>جستجو خودکار</label><MdErrorOutline />
                  </div>
                  <FormCheck
                    type="switch"
                    id="custom-switch"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="item-search">
                  <div className="title">
                      <label>نوع محصول</label><MdErrorOutline />
                  </div>
                  <Select options={options} />
                </div>
                <div className="item-search">
                  <div className="title">
                      <label>منتشر شده</label><MdErrorOutline />
                  </div>
                  <Select options={options} />
                </div>
              </div>
              <button className="btn btn-primary searchbtn"><BsSearch /> جستجو</button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Search;
