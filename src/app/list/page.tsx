import AuthScreen from '../components/auth/AuthScreen';
import { wrapper } from '../styles/container.css';
import theme from '../styles/theme.css';

export default function List() {
  const handleLogout = async () => {
    const response = await fetch('/api/auth', {
      method: 'Delete',
    });

    if (response.ok) {
      console.log('로그아웃 성공');
    } else {
      console.error('로그아웃 실패');
    }
  };

  return (
    <AuthScreen>
      <div className={wrapper}>dblist</div>
    </AuthScreen>
  );
}
