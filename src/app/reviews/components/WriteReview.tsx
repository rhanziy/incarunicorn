'use client';

import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import Button from '@/app/components/Button';
import { flexCenter } from '@/app/styles/container.css';
import theme from '@/app/styles/theme.css';
import * as styles from '../style.css';
import useWriteReviewForm from '../hooks/useWriteReviewForm';

function WriteReview() {
  const [showWrite, setShowWrite] = useState(false);
  const {
    loading,
    formData,
    handleSelectChange,
    handleSubmit,
    handleTextChange,
  } = useWriteReviewForm();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    setShowWrite(false);
  };

  const show = () => setShowWrite((prev) => !prev);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.writeReviewWrapper}>
          <div className={styles.writeReviewBox} onClick={show}>
            <div className={flexCenter}>
              <CreateRoundedIcon sx={{ fontSize: 20 }} />
              <p style={{ fontWeight: 500, marginLeft: theme.margin.xSmall }}>
                후기 작성
              </p>
            </div>
          </div>
          {showWrite && (
            <div>
              <form onSubmit={handleFormSubmit} method="POST">
                <div className={styles.writeReviewForm}>
                  <FormControl fullWidth margin="normal" size="small">
                    <InputLabel id="age-label">연령대 *</InputLabel>
                    <Select
                      labelId="age-label"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleSelectChange}
                      required
                      label="연령대 *"
                    >
                      <MenuItem value="20">20대</MenuItem>
                      <MenuItem value="30">30대</MenuItem>
                      <MenuItem value="40">40대</MenuItem>
                      <MenuItem value="50">50대</MenuItem>
                      <MenuItem value="60">60대 이상</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth margin="normal" size="small">
                    <InputLabel id="gender-label">성별 *</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleSelectChange}
                      required
                      label="성별"
                    >
                      <MenuItem value="M">남성</MenuItem>
                      <MenuItem value="F">여성</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <TextField
                  size="small"
                  label="비밀번호"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={formData.password}
                  onChange={handleTextChange}
                  required
                  sx={{ marginTop: 0 }}
                />
                <TextField
                  size="small"
                  label="이름"
                  name="nickname"
                  fullWidth
                  margin="normal"
                  value={formData.nickname}
                  onChange={handleTextChange}
                  required
                  sx={{ marginTop: 0 }}
                />

                <FormControl
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginTop: 0 }}
                >
                  <InputLabel id="category-label">상담내역 *</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleSelectChange}
                    required
                    label="상담내역 *"
                  >
                    <MenuItem value="join">보험을 가입하고 싶어요.</MenuItem>
                    <MenuItem value="inquiry">
                      보험료가 괜찮은지 궁금해요.
                    </MenuItem>
                    <MenuItem value="check">
                      내 보험 상태를 점검받고 싶어요.
                    </MenuItem>
                    <MenuItem value="claim">병원비를 청구하고 싶어요.</MenuItem>
                    <MenuItem value="question">간단한 질문이 있어요.</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="내용"
                  name="content"
                  fullWidth
                  margin="normal"
                  value={formData.content}
                  onChange={handleTextChange}
                  multiline
                  rows={5}
                  required
                  sx={{ marginTop: 0 }}
                />
                <div className={styles.formBtn}>
                  <Button fullWidth="right">등록</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default WriteReview;
