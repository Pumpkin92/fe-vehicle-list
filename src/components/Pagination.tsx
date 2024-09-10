import { PaginationProps } from "../interfaces";

export default function Pagination(props: PaginationProps) {
  const { currentPageNumber, totalPages, onPageChange } = props;
  const pagesToShow = [];

  if (currentPageNumber > 1) {
    pagesToShow.push(currentPageNumber - 1);
  }
  pagesToShow.push(currentPageNumber);

  if (currentPageNumber < totalPages) {
    pagesToShow.push(currentPageNumber + 1);
  }

  return (
    <div className="pagination-div">
      <button
        onClick={() => onPageChange(currentPageNumber - 1)}
        disabled={currentPageNumber === 1}
      >
        &lt;
      </button>

      {currentPageNumber > 2 && (
        <>
          <button onClick={() => onPageChange(1)}>1</button>
          <span>...</span>
        </>
      )}

      {pagesToShow.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => onPageChange(pageNumber)}
          className={currentPageNumber === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPageNumber + 1)}
        disabled={currentPageNumber === totalPages}
      >
        &gt;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPageNumber === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
}
