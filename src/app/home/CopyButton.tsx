'use client';

import React, { useState } from 'react';
import theme from '@/app/styles/theme.css';
import { Tooltip } from './Tooltip';

export const CopyButton: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('0504-347-2111');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('복사 실패: ', err);
    }
  };

  return (
    <Tooltip text="복사되었습니다!" visible={copySuccess}>
      <button
        onClick={handleCopy}
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
          border: 'none',
          background: 'none',
          color: '#0e69c9',
          fontSize: theme.fontSize.small,
          fontWeight: 500,
        }}
      >
        복사하기
      </button>
    </Tooltip>
  );
};
