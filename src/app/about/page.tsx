"use client";
import { Box, Container, Typography } from "@mui/material";
import BusinessFeature from "../components/BusinessFeature";
import useResponsive from "../hooks/useResponsive";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

export default function About() {
  const [hydrationLoad, setHydrationLoad] = useState(true);
  const { isMobile } = useResponsive();

  useEffect(() => {
    setHydrationLoad(false);
  }, []);

  return (
    <>
      {hydrationLoad ? (
        <Loading />
      ) : (
        <Container
          maxWidth="md"
          sx={{
            width: "100vw",
            marginTop: isMobile ? 4 : 2,
            paddingBottom: isMobile ? 6 : 4,
          }}
        >
          <h2>스타트업처럼 일하는 🦄 유니콘(Unicorn) 사업팀입니다. 😊</h2>
          <Typography mt={1.5}>
            스타트업은 많은 의미를 가지고 있지만 제 자신에게는 2가지 큰 의미가
            있습니다.
          </Typography>
          <Typography>
            1. 세상의 없는 것(아이템)을 통해 일자리와 경제적 가치를 창출한다.
            <br /> 2. 사회, 조직, 누구나 어려워하고 있는 문제를 풀어 나간다.
          </Typography>
          <Typography mt={1}>
            유니콘 사업팀은 무에서 유를 창조하는 스타트업의 정신을 가지고 주변에
            작은 것이라도 변화를 주기 위해 기획하고 실행합니다.
          </Typography>
          <Typography>
            반드시 고객에게 상품을 만들어 효율적으로 판매할 수 있는 시스템을
            구축하여 일자리를 창출하고 고용된 직원들이 행복한 근무 환경에서
            자신의 자아실현을 하는 것에 목표를 두고 사업을 하고 있습니다.
          </Typography>

          <Typography mt={3} mb={3} fontSize={16} fontWeight={600}>
            인카금융서비스의 비전/미션
          </Typography>

          <Box
            width={isMobile ? "100%" : 500}
            height={240}
            position={"relative"}
          >
            <Image
              src="/images/vision-mission.png"
              alt="비전/미션 이미지"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          <Typography mt={3} fontSize={16} fontWeight={600}>
            Unicorn 사업팀의 3가지 조직 문화를 약속합니다.
          </Typography>
          <Typography mt={1.5}>
            1. IT를 활용한 보험 영업 시스템을 통해 차별성을 가지고 신뢰라는
            무기를 드립니다.
            <br />
            2. 지속적인 교육을 통한 성장을 이루고 당당한 직업의식의 변화를
            주겠습니다.
            <br />
            3. 세부적인 성장전략을 통해 방향을 제시 해드리겠습니다.
          </Typography>

          <Typography mt={3} fontSize={16} fontWeight={600}>
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
        </Container>
      )}
    </>
  );
}
