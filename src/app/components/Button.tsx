import * as styles from '@/app/styles/button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'danger' | 'none';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

function Button({
  children,
  onClick,
  disabled = false,
  color = 'primary',
  size = 'medium',
  fullWidth = true,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={styles.button({ color, fullWidth, size })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
