"use client";
import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ConsultingFeature from "@components/ConsultingFeature";
import ResponsiveImage from "@components/ResponsiveImage";
import { ReviewComponent } from "./reviews/components/ReviewComponent";
import BusinessFeature from "@components/BusinessFeature";
import { CopyButton } from "@components/CopyButton";
import useResponsive from "@hooks/useResponsive";
import useGetReviews from "@/app/reviews/hooks/useGetReviews";
import FloatingBtn from "./components/FloatingBtn";

export default function Home() {
  const [hydrationLoad, setHydrationLoad] = useState(true);
  const router = useRouter();
  const { isTablet, isMobile } = useResponsive();
  const fetchReviews = useGetReviews();

  const goToReviewPage = () => {
    router.push("/reviews");
  };

  useEffect(() => {
    setHydrationLoad(false);
  }, []);

  return (
    <>
      {!hydrationLoad && (
        <Container
          maxWidth="md"
          sx={{ width: "100vw", marginTop: 2, marginBottom: 2 }}
        >
          <meta name="format-detection" content="telephone=no" />
          <Box
            display="flex"
            flexDirection={isTablet ? "column" : "row"}
            alignSelf={"flex-start"}
          >
            {isTablet ? (
              <Box
                display="flex"
                justifyContent={"flex-start"}
                alignSelf={"center"}
                minWidth={250}
                minHeight={250}
                maxWidth={360}
                maxHeight={360}
                borderRadius={"50%"}
                overflow={"hidden"}
              >
                <ResponsiveImage
                  src="/images/profileImage.jpeg"
                  alt="프로필 이미지"
                />
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent={"center"}
                alignSelf={"flex-start"}
                width={280}
                height={380}
                mr={4}
                borderRadius={3}
                overflow={"hidden"}
              >
                <Image
                  src="/images/profileImage.jpeg"
                  alt="프로필 이미지"
                  width={300}
                  height={394}
                  priority
                />
              </Box>
            )}

            <Box
              mt={2}
              height={isMobile ? "auto" : 380}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography fontSize={20} fontWeight={600} lineHeight={1.3}>
                안녕하세요! <br />
                유니콘 사업팀 대표 김성민 입니다.
              </Typography>
              <Typography mt={2}>
                다양한 경험을 통한 배움의 가장 큰 가치는 진심입니다. <br />
                작은일에 충성을 다해야 큰일도 이뤄 낼 수 있다는 마음으로
                <br />
                하는 일의 크기와 상관없이 최선을 다하겠습니다. <br />
                34개 보험사 상품 비교를 통해 제 자신에게 설득되지 않는 상품은
                권하지 않겠습니다.
              </Typography>
              <Typography mt={3} fontWeight={600}>
                인카금융서비스(주) 유니콘사업단
              </Typography>

              <Box display={"flex"} alignItems={"center"}>
                <Typography>
                  <Typography component={"span"} fontWeight={600}>
                    T.
                  </Typography>{" "}
                  010-4274-2111
                </Typography>
                <Button
                  type="button"
                  disableRipple
                  sx={{
                    "&.MuiButton-root:hover": { bgcolor: "transparent" },
                  }}
                >
                  <a href="tel:010-4274-2111">통화하기</a>
                </Button>
              </Box>
              <Box display={"flex"} alignItems={"center"} mt={-1}>
                <Typography>
                  <Typography component={"span"} fontWeight={600}>
                    F.
                  </Typography>{" "}
                  0504-347-2111
                </Typography>
                <CopyButton />
              </Box>
              <Typography>
                <Typography component={"span"} fontWeight={600}>
                  A.
                </Typography>{" "}
                경기 수원시 영통구 신원로 55 1408호
              </Typography>
              <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "underline" }}
                >
                  <Link href={`mailto:`}>Email</Link>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "underline" }}
                >
                  Instagram
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "underline" }}
                >
                  Toss
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={2}>
            <h2>인카금융서비스(주) 유니콘 사업단 GA 김프로</h2>
            <Typography>
              IT 회사 운영경험을 통해 시작한 AI 보험 컨설팅은 보다 더 꼼꼼하고
              투명하게 상품을 비교해드립니다! <br />
              만기가 되는 그날까지 고객님을 케어하도록 약속하겠습니다.
              <br />
              간단한 보험 문의부터 보험료 청구 외 유니콘 사업단은 AI프로 상담을
              통해 34개 보험사 데이터를 종합하여 최적의 솔루션을 제시하며
              상담해드립니다.
            </Typography>
          </Box>
          <Box mt={4}>
            <h2>AI 프로상담</h2>
            <Typography mb={2}>
              무료로 AI 프로보장분석 결과지를 받아보세요~!
            </Typography>
            <ConsultingFeature />
            <Typography mt={3}>
              AI프로 상담은 고객 만족도 99%로 간단한 보험 문의부터 보험료 청구
              외 유니콘 사업단은 AI프로 보장분석을 통해 34개 보험사 데이터를
              종합하여 보험 가입 및 비교 분석하여 최적의 솔루션을 제시하며
              상담해드립니다.
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
              <Link href={"/reviews"}>
                <Typography
                  fontWeight={600}
                  fontSize={18}
                  sx={{ color: "#6f5d91" }}
                >
                  고객 후기 구경하러 가기! →{" "}
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

            {/* <Box
              mt={2}
              borderRadius={2}
              sx={{
                p: 1,
                pl: 2,
                backgroundColor: "#e6d9ff",
              }}
            >
              <Link href={"/contact"}>
                <Typography
                  fontWeight={600}
                  fontSize={18}
                  sx={{ color: "#6f5d91" }}
                >
                  AI 프로보장 분석 문의하기 →
                </Typography>
              </Link>
            </Box> */}
          </Box>

          <Box mt={6}>
            <h2>스타트업처럼 일하는 🦄 유니콘(Unicorn) 사업팀입니다. 😊</h2>
            <Typography mt={1} fontSize={15}>
              스타트업은 많은 의미를 가지고 있지만 제 자신에게는 2가지 큰 의미가
              있습니다.
            </Typography>
            <Typography fontSize={15}>
              1. 세상의 없는 것(아이템)을 통해 일자리와 경제적 가치를 창출한다.
              <br /> 2. 사회, 조직, 누구나 어려워하고 있는 문제를 풀어 나간다.
            </Typography>
            <Typography mt={1} fontSize={15}>
              유니콘 사업팀은 무에서 유를 창조하는 스타트업의 정신을 가지고
              주변에 작은 것이라도 변화를 주기 위해 기획하고 실행합니다
              <br />
              반드시 고객에게 상품을 만들어 효율적으로 판매할 수 있는 시스템을
              구축하여 일자리를 창출하고 고용된 직원들이 행복한 근무 환경에서
              자신의 자아실현을 하는 것에 목표를 두고 사업을 하고 있습니다.
            </Typography>
            <Typography mt={3} mb={2} fontWeight={600}>
              인카금융서비스의 비전/미션
            </Typography>

            <ResponsiveImage
              maxWidth={500}
              src="/images/vision-mission.png"
              alt="비전/미션 이미지"
            />

            <Typography mt={3} fontWeight={600}>
              Unicorn 사업팀의 3가지 조직 문화를 약속합니다.
            </Typography>
            <Typography mt={1} fontSize={15}>
              1. IT를 활용한 보험 영업 시스템을 통해 차별성을 가지고 신뢰라는
              무기를 드립니다.
              <br />
              2. 지속적인 교육을 통한 성장을 이루고 당당한 직업의식의 변화를
              주겠습니다.
              <br />
              3. 세부적인 성장전략을 통해 방향을 제시 해드리겠습니다.
            </Typography>

            <Typography mt={3} fontWeight={600}>
              Unicorn 사업팀은 이런 사람과 일합니다.
            </Typography>
            <Box
              mt={2}
              height={150}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"3%"}
            >
              <BusinessFeature
                index={0}
                content={isMobile ? `인성을\n갖춘 사람` : "인성을 갖춘 사람"}
              ></BusinessFeature>
              <BusinessFeature
                index={2}
                content={`신뢰를 \n나타내는 사람`}
              ></BusinessFeature>
              <BusinessFeature
                index={1}
                content={`서로 성장을\n도와주는 사람`}
              ></BusinessFeature>
            </Box>
          </Box>

          <Box mt={6}>
            <h2>하는 일</h2>
            <Typography fontWeight={600} fontSize={16}>
              • 개인 및 사업자 종합금융상품 제안
            </Typography>
            <Typography ml={1}>
              - 고객의 경제적 안정과 행복을 지키는 신념을 잃지 않겠습니다.
              34개의 국내 생명/손해 보험사의 다양한 금융 상품을 토대로 고객님께
              합리적인 맞춤 금융 서비스를 제공하겠습니다.
            </Typography>
            <Typography mt={2} fontWeight={600} fontSize={16}>
              • 스타트업 및 법인 재무 컨설팅
            </Typography>
            <Typography ml={1}>
              - 투명하고 당당하게 숫자로 보여지는 기업을 운영하시는 대표님께
              신뢰라는 단어 하나로 인사드리겠습니다. 컨설팅을 통해 재무 건전성을
              높이고 깔끔한 일처리 능력을 보여드리겠습니다.
            </Typography>
          </Box>

          <Box mt={6}>
            <h2>걸어온 길</h2>
            <Typography fontWeight={600} fontSize={16}>
              • (주)동네티콘 CSO (2021-2024)
            </Typography>
            <Typography ml={1}>
              - 전략 기획 및 BM 구축
              <br />
              - 영업팀 관리
              <br />- 세무, 회계 관리
            </Typography>
            <Typography mt={2} fontWeight={600} fontSize={16}>
              • 이지나우(주) 대표 (2022-2024)
            </Typography>
            <Typography ml={1}>- 스타트업 재무 컨설팅</Typography>
            <Typography mt={2} fontWeight={600} fontSize={16}>
              • KT M&S(2017~2021)
            </Typography>
            <Typography ml={1}>- 우수 판매점 관리 운영</Typography>
            <Typography mt={2} fontWeight={600} fontSize={16}>
              • 라이나 생명(2017)
            </Typography>
            <Typography ml={1}>- 팀장 근무</Typography>
            <Typography mt={2} fontWeight={600} fontSize={16}>
              • 군복무 (2014-2016)
            </Typography>
            <Typography ml={1}>- 특전사 국제평화지원단</Typography>
          </Box>

          <Box mt={6} display={"flex"} flexDirection={"column"}>
            <h2>고객후기</h2>
            <Box
              mb={2}
              display={"flex"}
              flexWrap={"wrap"}
              sx={{ gap: "20px 2%" }}
            >
              <ReviewComponent reviews={fetchReviews?.slice(0, 5) ?? []} />
            </Box>

            <Button
              onClick={goToReviewPage}
              style={{
                color: "#666",
                fontWeight: 400,
                alignSelf: "center",
              }}
            >
              더보기
            </Button>
          </Box>
          <FloatingBtn />
        </Container>
      )}
    </>
  );
}
