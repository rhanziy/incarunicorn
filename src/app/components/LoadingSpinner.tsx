import * as style from "./style.css";

export const LoadingSpinner = () => {
  return (
    <div className={style.loadingBox}>
      <div className={style.spinner}></div>
    </div>
  );
};
