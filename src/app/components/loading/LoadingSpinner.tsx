'use client';
import * as style from '../style.css';
import useLoadingStore from './_store';

export function LoadingSpinner() {
  const { isLoading } = useLoadingStore();

  return (
    isLoading && (
      <div className={style.loadingBox}>
        <div className={style.spinner} />
      </div>
    )
  );
}
