import * as styles from './skeleton.css';

export default function ReviewSkeleton() {
  const items = Array.from({ length: 5 });
  return (
    <div className={styles.reviewWrapper}>
      {items.map((_, i) => (
        <div className={styles.skeletonItem} key={i}>
          <div
            className={styles.skeletonSpan}
            style={{ width: '30%', height: 24 }}
          ></div>
          <div
            className={styles.skeletonSpan}
            style={{ width: '50%', height: 24 }}
          ></div>
          <div
            className={styles.skeletonSpan}
            style={{ width: '100%', height: 50 }}
          ></div>
        </div>
      ))}
    </div>
  );
}
