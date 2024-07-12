import { Button, ButtonProps } from "@mui/material";
import { SxProps } from "@mui/system";

<<<<<<< Updated upstream
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
=======
interface CustomButtonProps extends ButtonProps {
  sx?: SxProps;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={{
        "&.MuiButton-root:hover": {
          bgcolor: "#142e85",
          boxShadow: "none",
        },
        padding: 1,
        borderRadius: 2,
        backgroundColor: "#0073e6",
        fontSize: 16,
        boxShadow: "none",
        ...sx,
      }}
    >
      {children}
>>>>>>> Stashed changes
    </Button>
  );
};

export default CustomButton;
