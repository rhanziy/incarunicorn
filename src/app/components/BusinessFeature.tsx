import React from "react";
import { Box, Typography } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Groups3Icon from "@mui/icons-material/Groups3";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

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
              marginTop: "-10px",
              fontSize: "44px",
              color: color[index],
            }}
          />
        );
      case 1:
        return (
          <AutoGraphIcon
            fontSize="large"
            style={{
              marginTop: "-10px",
              fontSize: "44px",
              color: color[index],
            }}
          />
        );
      case 2:
        return (
          <EmojiEventsIcon
            fontSize="large"
            style={{
              marginTop: "-10px",
              fontSize: "40px",
              color: color[index],
            }}
          />
        );
      default:
        return <DisabledByDefaultIcon fontSize="large" />;
    }
  };

  return (
    <Box
      component={"div"}
      width={150}
      height={150}
      borderRadius={"50%"}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      sx={{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: color[index],
      }}
    >
      {getIconByIndex(index)}
      <Typography
        mt={1}
        color={"white"}
        fontSize={14}
        fontWeight={600}
        sx={{ color: color[index] }}
        textAlign={"center"}
        lineHeight={1.2}
      >
        {content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};

export default BusinessFeature;
