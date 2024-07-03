"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomButton from "./components/CustomButton";
import ConsultingIcon from "./components/ConsultingIcon";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [copySuccess, setCopySuccess] = useState("");

  const handleClick = () => {
    router.push("/reviews");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("0504-347-2111");
      setCopySuccess("복사되었습니다!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      console.error("복사 실패: ", err);
      setCopySuccess("복사에 실패했습니다.");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <main className={styles.main}>
      <Box display="flex">
        <Box
          width={280}
          height={380}
          mr={4}
          overflow={"hidden"}
          borderRadius={3}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Image
            src="/images/profileImage.jpeg"
            alt="Next Logo"
            className={styles.vercelLogo}
            width={300}
            height={394}
            priority
          />
        </Box>
        <Box height={380} display={"flex"} flexDirection={"column"}>
          <h3>
            안녕하세요! <br />
            유니콘 사업팀 대표 김성민 입니다.
          </h3>
          <Typography>
            다양한 경험을 통한 배움의 가장 큰 가치는 진심입니다. <br />
            작은일에 충성을 다해야 큰일도 이뤄 낼 수 있다는 마음으로
            <br />
            하는 일의 크기와 상관없이 최선을 다하겠습니다. <br />
            34개 보험사 상품 비교를 통해 제 자신에게 설득되지 않는 상품은 권하지
            않겠습니다.
          </Typography>
          <Typography mt={3}>
            인카금융서비스(주) 서울특별시 유니콘사업단
          </Typography>

          <Box display={"flex"} alignItems={"center"}>
            <Typography>
              <span className={styles.bold}>T.</span> 010 - 4274 - 2111
            </Typography>
            <Button
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
              <span className={styles.bold}>F.</span> 0504 - 347 - 2111
            </Typography>
            <Tooltip
              title={copySuccess}
              open={!!copySuccess}
              arrow
              placement="right"
            >
              <Button
                disableRipple
                onClick={handleCopy}
                sx={{
                  "&.MuiButton-root:hover": { bgcolor: "transparent" },
                }}
              >
                복사하기
              </Button>
            </Tooltip>
          </Box>
          <Typography>
            <span className={styles.bold}>A.</span> 경기 수원시 영통구 신원로 55
            1408호
          </Typography>
          <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
            <Typography variant="body2">Email</Typography>
            <Typography variant="body2">Instagram</Typography>
            <Typography variant="body2">Toss</Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={4}>
        <h2>인카금융서비스(주) GA 설계사 </h2>
        <Typography>
          IT 회사 운영경험을 통해 시작한 AI 보험 컨설팅은 보다 더 꼼꼼하고
          투명하게 상품을 비교해드립니다! <br />
          만기가 되는 그날까지 고객님을 케어하도록 약속하겠습니다.
        </Typography>
        <Typography mt={2} mb={2} fontWeight={600}>
          • AI 보험 컨설팅
        </Typography>
        <Box display={"flex"} gap={1}>
          <ConsultingIcon icon="📞" text="상담신청"></ConsultingIcon>
          <ConsultingIcon
            icon="⚖️"
            text={"34개 보험사\n보장 비교"}
          ></ConsultingIcon>
          <ConsultingIcon
            icon="📩"
            text={"견적 및\n보장 상담"}
          ></ConsultingIcon>
          <ConsultingIcon icon="🔏" text={"계약"}></ConsultingIcon>
          <ConsultingIcon
            icon="📲"
            text={"후 관리\n소식 전달"}
          ></ConsultingIcon>
        </Box>
        <Typography mt={3} fontWeight={600}>
          • 컨설팅 리스트
        </Typography>
        <Box mt={1}>
          <Typography>
            - 자동차 보험
            <br />- 실본 보험
            <br />- 암 보험
            <br />- 연금 저축 보험
            <br />- 종신 변액 보험
          </Typography>
        </Box>
        <Typography mt={3} mb={1} fontWeight={600}>
          • 세상에서 가장 빠른 보험 청구 서비스
        </Typography>
        <Typography sx={{ textDecoration: "underline" }}>
          <Link href={"/contact"}>보험 청구 문의하기 →</Link>
        </Typography>
      </Box>

      <Box mt={4}>
        <h2>하는 일</h2>
        <Typography fontWeight={600}>
          • 개인 및 사업자 종합금융상품 제안
        </Typography>
        <Typography ml={1} fontSize={14}>
          - 고객의 경제적 안정과 행복을 지키는 신념을 잃지 않겠습니다. 34개의
          국내 생명/손해 보험사의 다양한 금융 상품을 토대로 고객님께 합리적인
          맞춤 금융 서비스를 제공하겠습니다.
        </Typography>
        <Typography mt={2} fontWeight={600}>
          • 스타트업 및 법인 재무 컨설팅
        </Typography>
        <Typography ml={1} fontSize={14}>
          - 투명하고 당당하게 숫자로 보여지는 기업을 운영하시는 대표님께
          신뢰라는 단어 하나로 인사드리겠습니다. 컨설팅을 통해 재무 건전성을
          높이고 깔끔한 일처리 능력을 보여드리겠습니다.
        </Typography>
      </Box>

      <Box mt={4}>
        <h2>걸어온 길</h2>
        <Typography fontWeight={600}>• (주)동네티콘 CSO (2021-2024)</Typography>
        <Typography ml={1} fontSize={14}>
          - 전략 기획 및 BM 구축
          <br />
          - 영업팀 관리
          <br />- 세무, 회계 관리
        </Typography>
        <Typography mt={2} fontWeight={600}>
          • 이지나우(주) 대표 (2022-2024)
        </Typography>
        <Typography ml={1} fontSize={14}>
          - 스타트업 재무 컨설팅
        </Typography>
        <Typography mt={2} fontWeight={600}>
          • KT M&S(2017~2021)
        </Typography>
        <Typography ml={1} fontSize={14}>
          - 우수 판매점 관리 운영
        </Typography>
        <Typography mt={2} fontWeight={600}>
          • 라이나 생명(2017)
        </Typography>
        <Typography ml={1} fontSize={14}>
          - 팀장 근무
        </Typography>
        <Typography mt={2} fontWeight={600}>
          • 군복무 (2014-2016)
        </Typography>
        <Typography ml={1} fontSize={14}>
          - 특전사 국제평화지원단
        </Typography>
      </Box>

      <Box mt={4}>
        <h2>Unicorn 사업팀 소개</h2>
        <Typography fontWeight={600}>
          스타트업 처럼 일하는 🦄 유니콘(Unicorn) 사업팀입니다. 😊
        </Typography>
        <Typography mt={2}>
          스타트업은 많은 의미를 가지고 있지만 제 자신에게는 2가지 큰 의미가
          있습니다.
        </Typography>
        <Typography>
          1. 세상의 없는 것(아이템)을 통해 일자리와 경제적 가치를 창출한다.
          <br /> 2. 사회, 조직, 누구나 어려워하고 있는 문제를 풀어 나간다.
        </Typography>
        <Typography mt={1}>
          저는 스타트업의 정신을 가지고 주변에 작은 것이라도 변화를 주기 위해
          기획하고 실행합니다. 사업을 통해 시스템을 만들어 일자리를 창출하고
          고용된 직원들이 행복한 근무 환경에서 자신의 자아실현을 하는 것에
          목표를 두고 사업을 하고있습니다. 이는 곧 자신의 삶과 하고있는 일
          그리고 가정에 대한 시간의 균형이 곧 가장 행복의 큰 가치라고 생각하기
          때문입니다.
          <br />
          IT를 활용한 보험 영업의 시스템을 통해 더욱더 효율적이고 차별화된 성장
          전략을 제시합니다.
        </Typography>
        <Typography mt={3} fontWeight={600}>
          Unicorn 사업팀의 3가지 조직 문화를 약속합니다.
        </Typography>
        <Typography mt={2}>
          1. 인성을 갖춘 조직 (사람)
          <br />
          2. 성장을 도와주는 조직 (성장)
          <br />
          3. 자본주의를 졸업하는 조직(성공)
        </Typography>
      </Box>

      <Box mt={3}>후기 영역</Box>
      <CustomButton title="더보기" handleClick={handleClick} />
    </main>
  );
}
