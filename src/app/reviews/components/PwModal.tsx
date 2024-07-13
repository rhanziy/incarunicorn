import { Box, Button, Modal, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { comparePassword } from "@/app/lib/hash";
import { remove } from "../action";
import { useRouter } from "next/navigation";

const PwModal = ({
  id,
  password,
  isModalOpen,
  setIsModalOpen,
}: {
  id: number;
  password: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [inputPassword, setInputPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setErrorText("");
  };

  const handleConfirmDelete = async () => {
    try {
      const correct = await comparePassword(inputPassword, password);

      if (correct) {
        await remove(id);
        window.location.reload();
        setIsModalOpen(false);
      } else {
        setInputPassword("");
        setErrorText("비밀번호가 일치하지 않습니다.");
      }
    } catch {
      setErrorText("다시 시도해주세요.");
    }
  };

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 2,
          pb: 2,
          pl: 3,
          pr: 3,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
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
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button onClick={handleCloseModal}>취소</Button>
          <Button onClick={handleConfirmDelete}>확인</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PwModal;
