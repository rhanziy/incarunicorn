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
import { useContactForm } from './hook/useContactForm';
import Button from '../components/Button';
import { wrapper } from '../styles/container.css';
import theme from '../styles/theme.css';

export default function Contact() {
  const {
    loading,
    formData,
    handleSubmit,
    handleSelectChange,
    handleChange,
    handleBlur,
    errors,
  } = useContactForm();

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
            <FormControl fullWidth margin="normal">
              <InputLabel id="purpose-label">질문유형 *</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleSelectChange}
                required
                label="질문유형 *"
              >
                <MenuItem value="join">보험을 가입하고 싶어요.</MenuItem>
                <MenuItem value="inquiry">보험료가 괜찮은지 궁금해요.</MenuItem>
                <MenuItem value="check">
                  내 보험 상태를 점검받고 싶어요.
                </MenuItem>
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
              <InputLabel id="job-label">직업 *</InputLabel>
              <Select
                labelId="job-label"
                id="job"
                name="job"
                value={formData.job}
                onChange={handleSelectChange}
                required
                label="직업 *"
              >
                <MenuItem value="무직">무직</MenuItem>
                <MenuItem value="학생">학생</MenuItem>
                <MenuItem value="컴퓨터/인터넷">컴퓨터/인터넷</MenuItem>
                <MenuItem value="언론">언론</MenuItem>
                <MenuItem value="공무원">공무원</MenuItem>
                <MenuItem value="군인">군인</MenuItem>
                <MenuItem value="서비스업">서비스업</MenuItem>
                <MenuItem value="교육">교육</MenuItem>
                <MenuItem value="금융/증권/보험업">금융/증권/보험업</MenuItem>
                <MenuItem value="유통업">유통업</MenuItem>
                <MenuItem value="예술">예술</MenuItem>
                <MenuItem value="의료">의료</MenuItem>
                <MenuItem value="법률">법률</MenuItem>
                <MenuItem value="건설업">건설업</MenuItem>
                <MenuItem value="제조업">제조업</MenuItem>
                <MenuItem value="부동산업">부동산업</MenuItem>
                <MenuItem value="운송업">운송업</MenuItem>
                <MenuItem value="농/수/임/광산업">농/수/임/광산업</MenuItem>
                <MenuItem value="가사">가사</MenuItem>
                <MenuItem value="기타">기타</MenuItem>
              </Select>
            </FormControl>

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
            <div style={{ marginTop: theme.margin.base }}>
              <Button size="large">문의하기</Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
