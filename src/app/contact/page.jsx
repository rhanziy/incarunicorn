"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useContactForm } from "./hook/useContactForm";
import useResponsive from "../hooks/useIsMobile";

export default function Contact() {
  const { isMobile } = useResponsive();
  const { formData, handleSubmit, handleChange, handleBlur, errors } =
    useContactForm();

  return (
    <Container
      maxWidth="sm"
      sx={{ marginTop: isMobile ? 4 : 2, paddingBottom: isMobile ? 6 : 0 }}
    >
      <Typography fontSize={20} fontWeight={600} gutterBottom>
        김프로에게 문의하기
      </Typography>
      <Typography mb={2}>
        안녕하세요 김성민입니다. 어떤것이 궁금하세요?
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="purpose-label">질문유형 *</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            label="질문유형 *"
          >
            <MenuItem value="join">보험을 가입하고 싶어요.</MenuItem>
            <MenuItem value="inquiry">보험료가 괜찮은지 궁금해요.</MenuItem>
            <MenuItem value="check">내 보험 상태를 점검받고 싶어요.</MenuItem>
            <MenuItem value="claim">병원비를 청구하고 싶어요.</MenuItem>
            <MenuItem value="question">간단한 질문이 있어요.</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="이름"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="telecom-label">통신사 *</InputLabel>
          <Select
            labelId="telecom-label"
            id="telecom"
            name="telecom"
            value={formData.telecom}
            onChange={handleChange}
            required
            label="통신사 *"
          >
            <MenuItem value="SKT">SKT</MenuItem>
            <MenuItem value="KT">KT</MenuItem>
            <MenuItem value="LGU+">LGU+</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="연락처"
          name="phoneNumber"
          fullWidth
          margin="normal"
          value={formData.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.phoneNumber}
          helperText={
            errors.phoneNumber
              ? errors.phoneNumber
              : '연락처는 "-" 제외 11자리를 입력해주세요.'
          }
          required
        />

        <TextField
          label="주민번호"
          name="ssn"
          fullWidth
          margin="normal"
          value={formData.ssn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.ssn}
          helperText={
            errors.ssn ? errors.ssn : ' "-" 포함 13자리를 입력해주세요.'
          }
          required
        />

        <TextField
          label="문의사항"
          name="text"
          fullWidth
          margin="normal"
          value={formData.text}
          onChange={handleChange}
          multiline
          rows={3}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
          }
          label="개인정보 수집 및 이용에 동의합니다."
        />
        <Box mt={2}>
          <Button
            disableRipple
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              "&.MuiButton-root:hover": {
                bgcolor: "#142e85",
                boxShadow: "none",
              },
              padding: 1.5,
              borderRadius: 4,
              backgroundColor: "#0073e6",
              fontSize: 18,
              boxShadow: "none",
            }}
          >
            문의하기
          </Button>
        </Box>
      </form>
    </Container>
  );
}
