'use client';

import { FormEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { wrapper } from '@/app/styles/container.css';
import Button from '../Button';
import useAuthStore from './_store';
import { supabase } from '@/config/supabase/client';

export default function AuthScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    checkSession();
  }, [setIsAuthenticated]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPw,
        }),
      });

      if (!response.ok) {
        throw new Error('로그인 실패했습니다.');
      }
      setIsAuthenticated(true);
    } catch (error) {
      alert('계정 정보가 일치하지 않습니다.');
      console.error('로그인 실패', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ width: 350, margin: '0 auto' }}>
        <form onSubmit={handleLogin} method="POST" className={wrapper}>
          <h2>관리자 로그인</h2>
          <TextField
            label="이메일"
            name="inputEmail"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label="비밀번호"
            name="inputPw"
            type="password"
            value={inputPw}
            onChange={(e) => setInputPw(e.target.value)}
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
      </div>
    );
  }

  return <>{children}</>;
}
