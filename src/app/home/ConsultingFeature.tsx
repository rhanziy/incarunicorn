import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { flexAllCenter } from "../styles/container.css";
import theme from "../styles/theme.css";
import * as styles from "./styles/style.css";

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
    <div
      className={flexAllCenter}
      style={{
        width: "100%",
        padding: theme.padding.small,
        paddingLeft: theme.padding.base,
        borderRadius: 8,
        backgroundColor: !right ? "#e0e0e0" : "#142e85",
      }}
    >
      <div style={{ width: "15%" }}>
        <div
          className={flexAllCenter}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            alignSelf: "flex-start",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontSize: 30 }}>{icon}</p>
        </div>
      </div>
      <div style={{ width: "85%", textAlign: "center" }}>
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: !right ? "#919191" : "#a6ff00",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const ConsultingFeature = () => {
  return (
    <div className={styles.consultingWrapper}>
      <div className={styles.consultingContainer}>
        <p style={{ alignSelf: "center", color: "#919191", fontWeight: 600 }}>
          컨설팅 전
        </p>
        {consultingIconsLeft.map((item, index) => (
          <ConsultingIcon key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
      <div className={styles.arrowBox}>
        <DoubleArrowIcon fontSize="large" sx={{ color: "#abceff" }} />
      </div>
      <div className={styles.consultingContainer}>
        <p style={{ alignSelf: "center", color: "#142e85", fontWeight: 600 }}>
          컨설팅 후
        </p>
        {consultingIconsRight.map((item, index) => (
          <ConsultingIcon right key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default ConsultingFeature;
