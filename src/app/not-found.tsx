import { flexColumnAllCenter, wrapper } from './styles/container.css';
import * as styles from './styles/style.css';
import ContentPasteOffRoundedIcon from '@mui/icons-material/ContentPasteOffRounded';

export default function NotFound() {
  return (
    <div
      className={`${wrapper}, ${flexColumnAllCenter}`}
      style={{ height: 600 }}
    >
      <ContentPasteOffRoundedIcon sx={{ fontSize: 60, color: '#ffc44d' }} />
      <h2 className={styles.heading}>404 ERROR !</h2>
      <h2 className={styles.heading}>페이지를 찾을 수 없습니다.</h2>
      <p className={styles.message}>
        요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
      </p>
    </div>
  );
}
