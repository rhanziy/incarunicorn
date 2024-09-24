'use client';

import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { wrapper } from '@/app/styles/container.css';
import theme from '@/app/styles/theme.css';
import Button from '../Button';
import createClient from '@/config/supabase/client';

export default function AuthScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputAccount, setInputAccount] = useState({
    inputEmail: '',
    inputPw: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    const session = supabase.auth.getSession();
    session.then(({ data }) => {
      data.session ? setIsAuthenticated(true) : setIsAuthenticated(false);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputAccount.inputEmail,
        password: inputAccount.inputPw,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('로그인 성공');
    } else {
      alert('계정 정보가 일치하지 않습니다.');
      console.error('로그인 실패', data.error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        className={wrapper}
        style={{
          padding: theme.padding.base,
        }}
      >
        <TextField
          label="이메일"
          name="inputEmail"
          value={inputAccount.inputEmail}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="비밀번호"
          type="password"
          name="inputPw"
          value={inputAccount.inputPw}
          onChange={handleChange}
          fullWidth
          style={{ marginTop: 12 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            onClick={handleLogin}
            fullWidth="right"
            style={{ marginTop: 8 }}
          >
            로그인
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>; // 비밀번호가 맞으면 children을 렌더링
}
