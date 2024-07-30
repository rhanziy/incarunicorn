import { Box, Typography } from "@mui/material";

export const History = () => {
  return (
    <>
      <Box mt={6}>
        <h2>하는 일</h2>
        <Typography variant="h4">• 개인 및 사업자 종합금융상품 제안</Typography>
        <Typography ml={1} mt={1}>
          - 고객의 경제적 안정과 행복을 지키는 신념을 잃지 않겠습니다. 36개의
          국내 생명/손해 보험사의 다양한 금융 상품을 토대로 고객님께 합리적인
          맞춤 금융 서비스를 제공하겠습니다.
        </Typography>
        <Typography mt={2} variant="h4">
          • 스타트업 및 법인 재무 컨설팅
        </Typography>
        <Typography ml={1} mt={1}>
          - 투명하고 당당하게 숫자로 보여지는 기업을 운영하시는 대표님께
          신뢰라는 단어 하나로 인사드리겠습니다. 컨설팅을 통해 재무 건전성을
          높이고 깔끔한 일처리 능력을 보여드리겠습니다.
        </Typography>
      </Box>

      <Box mt={6}>
        <h2>걸어온 길</h2>
        <Typography variant="h4">• (주)동네티콘 CSO (2021-2024)</Typography>
        <Typography ml={1} mt={0.5}>
          - 전략 기획 및 BM 구축
          <br />
          - 영업팀 관리
          <br />- 세무, 회계 관리
        </Typography>
        <Typography mt={2} variant="h4">
          • 이지나우(주) 대표 (2022-2024)
        </Typography>
        <Typography ml={1} mt={0.5}>
          - 스타트업 재무 컨설팅
        </Typography>
        <Typography mt={2} variant="h4">
          • KT M&S(2017~2021)
        </Typography>
        <Typography ml={1} mt={0.5}>
          - 우수 판매점 관리 운영
        </Typography>
        <Typography mt={2} variant="h4">
          • 라이나 생명(2017)
        </Typography>
        <Typography ml={1} mt={0.5}>
          - 팀장 근무
        </Typography>
        <Typography mt={2} variant="h4">
          • 군복무 (2014-2016)
        </Typography>
        <Typography ml={1} mt={1}>
          - 특전사 국제평화지원단
        </Typography>
      </Box>
    </>
  );
};
