import { Table } from "react-bootstrap";
import { DataProducts } from "../../data/data";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Pagination from "../layout/Pagination";
import "./tables.css";

const Tables = () => {
  const [allBlogs, setAllBlogs] = useState(DataProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage === 3) {
      return null;
    }
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return null;
    }
    setCurrentPage(currentPage - 1);
  };
  return (
    <div id="tables">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>نام محصول</th>
            <th>شناسه محصول</th>
            <th>قیمت</th>
            <th>موجودی کالا</th>
            <th>نوع محصول</th>
            <th>ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.price} (ریال)</td>
              <td>{item.number}</td>
              <td>{item.type}</td>
              <td>
                <button className="btn" >
                  <a href="/editproduct">
                    <BiEdit /> ویرایش
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="footer-table">
        <div>
          <span>items</span>
          <select
            onChange={(e) => {
              setPostsPerPage(e.target.value);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={allBlogs.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Tables;
