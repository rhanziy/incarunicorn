import * as styles from "@/app/styles/button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: "primary" | "secondary" | "danger" | "none";
  fullWidth?: "full" | "left" | "right";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  color = "primary",
  size = "medium",
  fullWidth = "full",
}) => {
  return (
    <button
      className={styles.button({ color, fullWidth, size })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
