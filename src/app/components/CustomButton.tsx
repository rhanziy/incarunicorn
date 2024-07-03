import { Button } from "@mui/material";

const CustomButton = ({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}) => {
  return (
    <Button onClick={handleClick} style={{ color: "#666", fontWeight: 400 }}>
      {title}
    </Button>
  );
};

export default CustomButton;
