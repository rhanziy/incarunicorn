import { Box, Stack, Typography } from "@mui/material";
import ConsultingFeature from "./ConsultingFeature";
import Link from "next/link";
import ResponsiveImage from "../ResponsiveImage";

export const ProConsulting = () => {
  return (
    <Box mt={6}>
      <h2>AI 프로상담</h2>
      <Typography mb={3}>
        현재 보험시장의 패러다임은 다양한 보험사의 장점을 나타낸 상품을 비교
        분석하는 GA시장으로 변화하고 있습니다. IT 회사 운영경험을 통해 시작한 AI
        보험 컨설팅은 보다 더 꼼꼼하고 투명하게 상품을 비교해드립니다! 간단한
        보험 문의부터 보험료 청구 외 유니콘 사업단은 AI프로 상담을 통해 36개
        보험사 데이터를 종합하여 최적의 솔루션을 제시하며 상담해드립니다.
      </Typography>
      <ConsultingFeature />
      <Typography mt={3}>
        AI프로 상담은 고객 만족도 99%로 간단한 보험 문의부터 보험료 청구 외
        유니콘 사업단은 AI프로 보장분석을 통해 34개 보험사 데이터를 종합하여
        보험 가입 및 비교 분석하여 최적의 솔루션을 제시하며 상담해드립니다.
      </Typography>
      <Box
        mt={2}
        borderRadius={2}
        sx={{
          p: 1,
          pl: 2,
          backgroundColor: "#e6d9ff",
        }}
      >
        <Link href={"/reviews"} scroll={false}>
          <Typography fontWeight={600} fontSize={17} sx={{ color: "#6f5d91" }}>
            고객 후기 구경하러 가기 →{" "}
          </Typography>
        </Link>
      </Box>

      <Box mt={4} display={"flex"} flexWrap={"wrap"}>
        <Stack width={"50%"} mb={1}>
          <Typography mb={1}>1. 이런분들이 신청해요.</Typography>
          <ResponsiveImage src="/images/step/1.png" alt="step1" />
        </Stack>
        <Stack width={"50%"} mb={1}>
          <Typography mb={1}>2. 결과지를 받아보세요.</Typography>
          <ResponsiveImage src="/images/step/3.png" alt="step3" />
        </Stack>
        <Stack width={"50%"} mb={1}>
          <Typography mb={1}>3. 궁금한 부분을 상담해 드려요.</Typography>
          <ResponsiveImage
            center
            width={"80%"}
            src="/images/step/2.png"
            alt="step2"
          />
        </Stack>
        <Stack width={"50%"} mb={1}>
          <Typography mb={1}>4. 솔루션 제안</Typography>
          <ResponsiveImage
            center
            width={"85%"}
            src="/images/step/4.png"
            alt="step4"
          />
        </Stack>
      </Box>
    </Box>
  );
};
