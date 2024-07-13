import { Button, ButtonProps } from "@mui/material";
import { SxProps } from "@mui/system";

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
        padding: 0.5,
        borderRadius: 2,
        backgroundColor: "#0073e6",
        fontSize: 16,
        boxShadow: "none",
        fontWeight: 600,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
