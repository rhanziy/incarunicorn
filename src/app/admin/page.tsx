import AuthScreen from '../components/auth/AuthScreen';
import { getContactUser } from '../contact/action';
import { wrapper } from '../styles/container.css';
import { DBList } from './components/DBList';
import { LogoutBtn } from './components/LogoutBtn';

export default async function Admin() {
  const userList = await getContactUser();

  return (
    <AuthScreen>
      <div className={wrapper}>
        <LogoutBtn />
        <DBList userList={userList} />
      </div>
    </AuthScreen>
  );
}
