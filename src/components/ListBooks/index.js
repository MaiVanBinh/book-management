import { useState } from "react";
// import CustomPagination from "../CustomPagination";
import Book from "./Book";
import { styled } from "styled-components";
import { listBook } from "../../page/utils/data";
import Pagination from "../Pagination";

const ListBookContainer = styled("div")`
  .block-header {
    color: #6b9876;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 5px 10px;
      background-color: var(--mainColor);
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
    }
    .title {
      margin: 0;
      font-size: 24px;
      margin-bottom: 5px;
      line-height: 30px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ListBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePageHandler = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ListBookContainer>
      <div class="block-header">
        <h2 class="title">Mới cập nhật</h2>
        <div>
          <button variant="text" onClick={() => {}}>
            Thêm mới
          </button>
        </div>
      </div>
      {listBook.map((item) => (
        <Book data={item} />
      ))}
      <div className="pagination">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={40}
          pageSize={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </ListBookContainer>
  );
};

export default ListBooks;
