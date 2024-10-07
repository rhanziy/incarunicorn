import { Modal } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import * as style from '../styles/style.css';
import theme from '@/app/styles/theme.css';

export const SuccessModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <div className={style.successModal}>
        <div className={style.closeBtn} onClick={() => setIsOpen(false)}>
          <CloseRoundedIcon />
        </div>
        <p style={{ fontSize: theme.fontSize.xLarge }}>🎉</p>
        <p className={style.sucessText}>이벤트 신청이 완료되었어요!</p>
        <p className={style.sucessText2}>
          빠른 시일 내에
          <br /> 순차적으로 연락드리겠습니다.
        </p>
      </div>
    </Modal>
  );
};
