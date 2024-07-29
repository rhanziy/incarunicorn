"use client";
import { Box, Button, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import Image from "next/image";
import { CopyButton } from "./CopyButton";
import Link from "next/link";

const Common = () => {
  return (
    <Box pt={2} display={"flex"} flexDirection={"column"}>
      <Typography fontSize={20} fontWeight={600} lineHeight={1.3}>
        안녕하세요! <br />
        유니콘 사업팀 대표 김성민 입니다.
      </Typography>
      <Typography mt={2}>
        다양한 경험을 통한 배움의 가장 큰 가치는 진심입니다.
      </Typography>
      <Typography>
        작은일에 충성을 다해야 큰일도 이뤄 낼 수 있다는 마음으로 하는 일의
        크기와 상관없이 최선을 다하겠습니다.
      </Typography>
      <Typography>
        36개 보험사 상품 비교를 통해 제 자신에게 설득되지 않는 상품은 권하지
        않겠습니다.
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
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          <Link href={`mailto:`}>Email</Link>
        </Typography>
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          Instagram
        </Typography>
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          Toss
        </Typography>
      </Box>
    </Box>
  );
};

const Desktop = () => {
  return (
    <Box display="flex" flexDirection={"row"} alignSelf={"flex-start"}>
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
          src="/images/profileImage.jpg"
          alt="프로필 이미지"
          width={300}
          height={394}
          priority
        />
      </Box>

      <Common />
    </Box>
  );
};

const Mobile = () => {
  const { isMobile } = useResponsive();

  return (
    <Box display="flex" flexDirection={"column"} alignSelf={"flex-start"}>
      <Box
        display="flex"
        position={"relative"}
        justifyContent={"flex-start"}
        alignSelf={"center"}
        width={isMobile ? 270 : 360}
        height={isMobile ? 340 : 420}
        borderRadius={"50%"}
        overflow={"hidden"}
      >
        <Image
          src="/images/profileImage.jpg"
          alt="프로필 이미지"
          fill
          sizes="(max-width: 768px) 360px, (max-width: 480px) 270px"
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Common />
    </Box>
  );
};

export const TopProfile = () => {
  const { isTablet } = useResponsive();
  return isTablet ? <Mobile /> : <Desktop />;
};
