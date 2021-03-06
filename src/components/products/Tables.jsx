import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Pagination from "../layout/Pagination";
import { DataProducts } from "../../data/data";
import { BiEdit } from "react-icons/bi";
import { Configs } from "./configs";
import {list, BASE_URL} from '../utils/DataManager'; 
import "./tables.css";


const Tables = () => {
  const { products } = useParams();
  const [allBlogs, setAllBlogs] = useState([]);

  const fetchMyAPI = useCallback(async () => {
    // let response = await fetch(list(Configs[products]['route']));
    let response = await fetch(BASE_URL + Configs[products]['route'], {
      headers: {
        'cultureLcid': '1065'
      }
    })
    response = await response.json()
    console.log(response.result)
    setAllBlogs(response.result);
  }, [])


  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])
  

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
            <th><input type='checkbox' /></th>
            {Configs[products]['list_fields'].map((item, i) => (
              <th key={i}>{item.title}</th>
            ))}
            <th>ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              {Configs[products]['list_fields'].map((list_item, i) => (
                <td key={i}>{item[list_item.name]} {list_item.after}</td>
              ))}
              <td>
                <button className="btn">
                  <Link to={`editproduct/${item.id}`}>
                    <BiEdit /> ویرایش
                  </Link>
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

// export async function getStaticProps() {
//   // const { products } = useParams();
//   const res = await list(model['route']);
//   const records = await res.json();
//   console.log(records);

//   return {
//     props: {
//       records,
//     },
//   }
// }

export default Tables;
