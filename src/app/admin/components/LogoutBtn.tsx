'use client';
import useAuthStore from '@/app/components/auth/_store';

export function LogoutBtn() {
  const { setIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    const response = await fetch('/api/auth', {
      method: 'Delete',
    });

    if (response.ok) {
      console.log('로그아웃 성공');
      setIsAuthenticated(false);
    }
  };

  return (
    <div
      onClick={handleLogout}
      style={{
        cursor: 'pointer',
        fontSize: 14,
      }}
    >
      로그아웃
    </div>
  );
}
