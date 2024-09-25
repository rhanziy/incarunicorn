'use client';

import theme from '@/app/styles/theme.css';
import { useContactPetForm } from '../hooks/useContactPetForm';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Button from '@/app/components/Button';
import { SuccessModal } from './SuccessModal';

export const ContactPetForm = () => {
  const {
    formData,
    handleSubmit,
    handleSelectChange,
    handleChange,
    handleBlur,
    errors,
    openModal,
    handleModal,
  } = useContactPetForm();

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: theme.margin.large }}>
        <p
          style={{
            marginBottom: theme.margin.negativeSmall,
            fontWeight: 600,
          }}
        >
          👤 반려인 정보
        </p>
        <TextField
          label="이름"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormControl fullWidth>
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
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="연락처"
              name="phoneNumber"
              fullWidth
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
          </Grid>
        </Grid>

        <p
          style={{
            marginBottom: theme.margin.negativeSmall,
            fontWeight: 600,
          }}
        >
          🐾 반려동물 정보
        </p>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="petage-label">반려동물 종류 *</InputLabel>
              <Select
                labelId="petType-label"
                id="petType"
                name="petType"
                value={formData.petType}
                onChange={handleSelectChange}
                required
                label="반려동물 종류"
              >
                <MenuItem value={'강아지'}>강아지</MenuItem>
                <MenuItem value={'고양이'}>고양이</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="petGender-label">반려동물 성별</InputLabel>
              <Select
                labelId="petGender-label"
                id="petGender"
                name="petGender"
                value={formData.petGender}
                onChange={handleSelectChange}
                required
                label="반려동물 성별"
              >
                <MenuItem value={'여'}>여아</MenuItem>
                <MenuItem value={'남'}>남아</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              label="반려동물 이름"
              name="petName"
              fullWidth
              value={formData.petName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="petage-label">반려동물 나이</InputLabel>
              <Select
                labelId="petage-label"
                id="petAge"
                name="petAge"
                value={formData.petAge}
                onChange={handleSelectChange}
                required
                label="반려동물 나이"
              >
                {[...Array(25)].map((_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    만 {index + 1}세
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

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
            이벤트 신청
          </Button>
        </div>
      </form>
      {openModal && <SuccessModal open={openModal} handleModal={handleModal} />}
    </div>
  );
};
