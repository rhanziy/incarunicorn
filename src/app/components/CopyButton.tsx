import React, { useState } from "react";
import { Button, Tooltip } from "@mui/material";

export const CopyButton: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
    <Tooltip title={copySuccess} open={!!copySuccess} arrow placement="right">
      <Button
        type="button"
        disableRipple
        onClick={handleCopy}
        sx={{
          "&.MuiButton-root:hover": { bgcolor: "transparent" },
        }}
      >
        복사하기
      </Button>
    </Tooltip>
  );
};
