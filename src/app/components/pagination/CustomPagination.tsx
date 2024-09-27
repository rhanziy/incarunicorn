import * as styles from './style.css';

interface Props {
  currentPage: number; // 현재 페이지
  pageCount: number; // 전체 페이지 개수
  onPageChange: (page: number) => void; // 페이지 변경 핸들러
  showPageCount?: number;
}

export default function CustomPagination({
  currentPage,
  pageCount,
  onPageChange,
  showPageCount = 4,
}: Props) {
  const noPrev = currentPage === 1;
  const noNext = currentPage === pageCount;

  const handlePrev = () => {
    if (noPrev) return;
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (noNext) return;
    onPageChange(currentPage + 1);
  };

  const halfVisible = Math.floor(showPageCount / 2);

  // 시작 페이지와 끝 페이지 계산
  let startPage = Math.max(currentPage - halfVisible, 1);
  let endPage = Math.min(startPage + showPageCount - 1, pageCount);

  // 끝 페이지가 전체 페이지 수보다 적으면 시작 페이지 조정
  if (endPage - startPage < showPageCount - 1) {
    startPage = Math.max(endPage - showPageCount + 1, 1);
  }

  // 페이지 배열 생성
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <>
      {pageCount > 0 && (
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
                onClick={() => onPageChange(1)}
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
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* 마지막 페이지 버튼과 생략 기호 */}
          {endPage < pageCount && (
            <>
              {endPage < pageCount - 1 && <span>...</span>} {/* 생략 기호 */}
              <button
                className={styles.paginationButton}
                onClick={() => onPageChange(pageCount)}
              >
                {pageCount}
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
