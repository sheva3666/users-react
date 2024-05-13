/* eslint-disable react/prop-types */
import "./PagePagination.css";

const PagePagination = ({ currentPage, allPages, setCurrentPage }) => (
  <div className="page-pagination">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prevState) => prevState - 1)}
    >
      Previouse
    </button>
    <p>
      {currentPage} from {allPages} pages.
    </p>
    <button
      disabled={allPages <= currentPage}
      onClick={() => setCurrentPage((prevState) => prevState + 1)}
    >
      Next
    </button>
  </div>
);

export default PagePagination;
