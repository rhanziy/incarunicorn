import { Box, Typography } from "@mui/material";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import useResponsive from "../hooks/useIsMobile";

const consultingIconsLeft = [
  { icon: "💸", text: "수입 대비 지출이 많을 때" },
  { icon: "😩", text: "보장 범위가 좁을 때" },
  { icon: "⛔️", text: "보장이 초과될 때" },
  { icon: "🗓️", text: "보장 기간이 짧을 때" },
  { icon: "📉", text: "갱신 여부가 부적합한 상품" },
];

const consultingIconsRight = [
  { icon: "💰", text: "보험료 줄이기" },
  { icon: "😄", text: "보장 범위가 넓은 보험으로" },
  { icon: "👍🏻", text: "보장 금액 조정" },
  { icon: "👵🏻", text: "90, 100세 만기" },
  { icon: "🔗", text: "갱신 여부 변겅" },
];

const ConsultingIcon = ({
  icon,
  text,
  right = false,
}: {
  icon: string;
  text: string;
  right?: boolean;
}) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={1}
      pl={1.5}
      borderRadius={2}
      sx={{ backgroundColor: !right ? "#e0e0e0" : "#142e85" }}
    >
      <Box width={"15%"}>
        <Box
          width={40}
          height={40}
          borderRadius={"50%"}
          sx={{
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: "white",
          }}
        >
          <Typography fontSize={30}>{icon}</Typography>
        </Box>
      </Box>
      <Box width={"85%"} textAlign={"center"}>
        <Typography
          fontSize={14}
          fontWeight={600}
          color={!right ? "#919191" : "#a6ff00"}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

const ConsultingFeature = () => {
  const { isMobile } = useResponsive();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={isMobile ? "column" : "row"}
      gap={"3%"}
    >
      <Box
        display={"flex"}
        width={isMobile ? "100%" : "47%"}
        gap={1}
        flexDirection={"column"}
      >
        <Typography alignSelf={"center"} color={"#919191"} fontWeight={600}>
          컨설팅 전
        </Typography>
        {consultingIconsLeft.map((item, index) => (
          <ConsultingIcon key={index} icon={item.icon} text={item.text} />
        ))}
      </Box>
      <Box
        mt={isMobile ? 0 : 6}
        p={isMobile ? 2 : 0}
        sx={{
          transform: isMobile ? "rotate(90deg)" : "rotate(0deg)",
        }}
      >
        <DoubleArrowIcon fontSize="large" sx={{ color: "#abceff" }} />
      </Box>
      <Box
        display={"flex"}
        width={isMobile ? "100%" : "47%"}
        gap={1}
        flexDirection={"column"}
      >
        <Typography alignSelf={"center"} color={"#142e85"} fontWeight={600}>
          컨설팅 후
        </Typography>
        {consultingIconsRight.map((item, index) => (
          <ConsultingIcon right key={index} icon={item.icon} text={item.text} />
        ))}
      </Box>
    </Box>
  );
};

export default ConsultingFeature;
