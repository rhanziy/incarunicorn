'use client';

import { FormEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { wrapper } from '@/app/styles/container.css';
import theme from '@/app/styles/theme.css';
import Button from '../Button';
import useAuthStore from './_store';
import createClient from '@/config/supabase/client';

export default function AuthScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const [inputAccount, setInputAccount] = useState({
    inputEmail: '',
    inputPw: '',
  });

  useEffect(() => {
    const supabase = createClient();
    const session = supabase.auth.getSession();

    session.then(({ data }) => {
      data.session ? setIsAuthenticated(true) : setIsAuthenticated(false);
    });
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    if (response.status === 200) {
      setIsAuthenticated(true);
    } else {
      alert('계정 정보가 일치하지 않습니다.');
      console.error('로그인 실패', data.error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isAuthenticated) {
    return (
      <form
        onSubmit={handleLogin}
        method="POST"
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="submit" fullWidth={false} style={{ marginTop: 12 }}>
            로그인
          </Button>
        </div>
      </form>
    );
  }

  return <>{children}</>;
}
