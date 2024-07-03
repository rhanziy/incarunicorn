import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const ConsultingIcon = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <Box
      width={100}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        width={80}
        height={80}
        borderRadius={"50%"}
        sx={{
          display: " flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f7ff",
        }}
      >
        <Typography fontSize={30}>{icon}</Typography>
      </Box>
      <Typography
        mt={1}
        fontSize={14}
        sx={{ textAlign: "center", lineHeight: 1.3 }}
      >
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};

export default ConsultingIcon;
