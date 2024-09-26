import * as styles from './style.css';

interface Props {
  totalItems: number; // 데이터의 총 개수
  itemCountPerPage: number; // 페이지 당 보여줄 데이터 개수
  currentPage: number; // 현재 페이지
  pageCount: number; // 보여줄 페이지 개수
  onPageChange: (page: number) => void; // 페이지 변경 핸들러
}

export default function CustomPagination({
  totalItems,
  itemCountPerPage,
  currentPage,
  pageCount,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemCountPerPage); // 전체 페이지 수

  const noPrev = currentPage === 1;
  const noNext = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const handlePrev = () => {
    if (noPrev) return;
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (noNext) return;
    onPageChange(currentPage + 1);
  };

  const halfVisible = Math.floor(pageCount / 2); // 반 페이지 수

  // 시작 페이지와 끝 페이지 계산
  let startPage = Math.max(currentPage - halfVisible, 1);
  let endPage = Math.min(startPage + pageCount - 1, totalPages);

  // 끝 페이지가 전체 페이지 수보다 적으면 시작 페이지 조정
  if (endPage - startPage < pageCount - 1) {
    startPage = Math.max(endPage - pageCount + 1, 1);
  }

  // 페이지 배열 생성
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
  return (
    <>
      {totalPages > 0 && (
        <div className={styles.paginationContainer}>
          <button
            className={styles.controlButton}
            onClick={handlePrev}
            disabled={noPrev}
          >
            이전
          </button>

          {/* 첫 번째 페이지 버튼과 생략 기호 */}
          {startPage > 1 && (
            <>
              <button
                className={styles.paginationButton}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              {startPage > 2 && <span>...</span>} {/* 생략 기호 */}
            </>
          )}

          {/* 페이지 버튼 */}
          {pages.map((page) => (
            <button
              key={page}
              className={`${styles.paginationButton} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* 마지막 페이지 버튼과 생략 기호 */}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span>...</span>} {/* 생략 기호 */}
              <button
                className={styles.paginationButton}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className={styles.controlButton}
            onClick={handleNext}
            disabled={noNext}
          >
            다음
          </button>
        </div>
      )}
    </>
  );
}
