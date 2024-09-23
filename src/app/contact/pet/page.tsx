'use client';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import Button from '../../components/Button';
import { flexCenter, wrapper } from '../../styles/container.css';
import theme from '../../styles/theme.css';
import { useContactPetForm } from '../hook/useContactPetForm';

export default function Contact() {
  const {
    loading,
    formData,
    handleSubmit,
    handleSelectChange,
    handleChange,
    handleBlur,
    errors,
  } = useContactPetForm();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={wrapper} style={{ maxWidth: theme.device.tablet }}>
          <h2>김프로에게 문의하기</h2>
          <p style={{ marginBottom: theme.margin.base }}>
            안녕하세요 김성민입니다. 어떤것이 궁금하세요?
          </p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="이름"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <div className={flexCenter} style={{ gap: 12 }}>
              <TextField
                label="반려동물 이름"
                name="petName"
                fullWidth
                margin="normal"
                value={formData.petName}
                onChange={handleChange}
                required
              />

              <TextField
                label="반려동물 나이"
                name="petAge"
                fullWidth
                margin="normal"
                value={formData.petAge}
                onChange={handleChange}
                required
              />
            </div>

            <FormControl fullWidth margin="normal">
              <InputLabel id="telecom-label">통신사 *</InputLabel>
              <Select
                labelId="telecom-label"
                id="telecom"
                name="telecom"
                value={formData.telecom}
                onChange={handleSelectChange}
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
            <div style={{ marginTop: theme.margin.base }}>
              <Button size="large" disabled={!!errors.phoneNumber}>
                문의하기
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
