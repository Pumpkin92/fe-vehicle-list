import { PaginationProps } from "../interfaces";

export default function Pagination(props: PaginationProps) {
  console.log(props);
  const { currentPageNumber, totalPages, onPageChange } = props;
  const pagesToShow = [];

  if (currentPageNumber > 1) {
    pagesToShow.push(currentPageNumber - 1);
  }
  pagesToShow.push(currentPageNumber);

  if (currentPageNumber < totalPages) {
    pagesToShow.push(currentPageNumber + 1);
  }
  console.log(pagesToShow);

  return (
    <div className="pagination-div">
      <button
        onClick={() => onPageChange(currentPageNumber - 1)}
        disabled={currentPageNumber === 1}
      >
        Back
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
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPageNumber === totalPages}
      >
        Last
      </button>
    </div>
  );
}
