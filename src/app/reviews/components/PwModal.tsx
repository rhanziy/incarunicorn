import { Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { comparePassword } from '@/app/lib/hash';
import Button from '@/app/components/Button';
import { remove } from '../action';
import * as styles from '../style.css';

const PwModal = ({
  id,
  password,
  isModalOpen,
  handleModal,
}: {
  id: number;
  password: string;
  isModalOpen: boolean;
  handleModal: (open: boolean) => void;
}) => {
  const [inputPassword, setInputPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const resetState = () => {
    setInputPassword('');
    setErrorText('');
  };

  const handleConfirmDelete = async () => {
    try {
      const correct = await comparePassword(inputPassword, password);

      if (correct) {
        await remove(id);
        handleModal(false);
        resetState();
      } else {
        setInputPassword('');
        setErrorText('비밀번호가 일치하지 않습니다.');
      }
    } catch {
      setErrorText('다시 시도해주세요.');
    }
  };

  return (
    <Modal open={isModalOpen} onClose={() => handleModal(false)}>
      <div className={styles.modalContainer}>
        <TextField
          label="비밀번호 입력"
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ width: 240 }}
          error={Boolean(errorText)}
          helperText={errorText}
        />
        <div className={styles.modalBtnContainer}>
          <Button color="none" onClick={() => handleModal(false)}>
            취소
          </Button>
          <Button color="none" onClick={handleConfirmDelete}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PwModal;
