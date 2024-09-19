// Tooltip.tsx
import React from 'react';
import * as styles from './tooltip.css';

interface TooltipProps {
  text: string;
  visible: boolean;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  visible,
  children,
}) => {
  return (
    <div className={styles.tooltipContainer}>
      {children}
      <div
        className={`${styles.tooltipText} ${
          visible ? styles.tooltipVisible : ''
        }`}
      >
        {text}
      </div>
    </div>
  );
};
