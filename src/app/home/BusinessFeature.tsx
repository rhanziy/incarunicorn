import React from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Groups3Icon from "@mui/icons-material/Groups3";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import theme from "../styles/theme.css";
import { flexColumnAllCenter } from "../styles/container.css";

const BusinessFeature = ({
  index,
  content,
}: {
  index: number;
  content: string;
}) => {
  const color = ["#037ea3", "#03a38b", "#6d5da8"];

  const getIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return (
          <Groups3Icon
            style={{
              marginTop: theme.margin.negativeSmall,
              fontSize: 44,
              color: color[index],
            }}
          />
        );
      case 1:
        return (
          <AutoGraphIcon
            fontSize="large"
            style={{
              marginTop: theme.margin.negativeSmall,
              fontSize: 44,
              color: color[index],
            }}
          />
        );
      case 2:
        return (
          <EmojiEventsIcon
            fontSize="large"
            style={{
              marginTop: theme.margin.negativeSmall,
              fontSize: 40,
              color: color[index],
            }}
          />
        );
      default:
        return <DisabledByDefaultIcon fontSize="large" />;
    }
  };

  return (
    <div
      className={flexColumnAllCenter}
      style={{
        maxWidth: 150,
        width: "30%",
        height: 150,
        borderRadius: "50%",
        border: `3px solid ${color[index]}`,
      }}
    >
      {getIconByIndex(index)}
      <p
        style={{
          marginTop: theme.margin.small,
          fontSize: theme.fontSize.small,
          fontWeight: 600,
          color: `${color[index]}`,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default BusinessFeature;
