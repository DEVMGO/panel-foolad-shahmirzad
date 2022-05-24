import React, { useState } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import makeData from "./makeData";
import { DataProducts } from "../../data/data";
import { BiEdit } from "react-icons/bi";
import "./tables.css";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  // Render the UI for your table
  const [check, setCheck] = useState('');
  function handleSelect(id) {
    page.filter((item, i) => i == id)
  }
  return (
    <div id="tables">
      <table
        {...getTableProps()}
        className="table table-hover table-bordered table-striped"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th>
                <input type="checkbox" />
              </th>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>ویرایش</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i} id={i}>
                <td>
                  <input type="checkbox" onChange={handleSelect(i)} />
                </td>
                {row.cells.map((cell, i) => {
                  return <td>{cell.render("Cell")} {i == 2 ? '(ریال)' : ''}</td>;
                })}
                <td>
                  <button className="btn">
                    <BiEdit /> ویرایش
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Table_Two() {
  const columns = React.useMemo(
    () => [
      {
        Header: "نام محصول",
        accessor: "name",
      },
      {
        Header: "شناسه محصول",
        accessor: "code",
      },
      {
        Header: "قیمت",
        accessor: "price",
      },
      {
        Header: "موجودی کالا",
        accessor: "number",
      },
      {
        Header: "نوع محصول",
        accessor: "type",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(100000), []);

  return <Table columns={columns} data={DataProducts} />;
}

export default Table_Two;
