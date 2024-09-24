import * as styles from '@/app/styles/button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'danger' | 'none';
  fullWidth?: 'full' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
}

function Button({
  children,
  onClick,
  disabled = false,
  color = 'primary',
  size = 'medium',
  fullWidth = 'full',
  style,
}: ButtonProps) {
  return (
    <button
      className={styles.button({ color, fullWidth, size })}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
