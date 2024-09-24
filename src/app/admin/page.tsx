import AuthScreen from '../components/auth/AuthScreen';
import { getContactUser } from '../contact/action';
import { getContactPet } from '../contact/pet/action';
import { wrapper } from '../styles/container.css';
import { LogoutBtn } from './components/LogoutBtn';
import { PetExcelList } from './components/PetExcelList';
import { UserExcelList } from './components/UserExcelList';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default async function Admin() {
  const userList = await getContactUser();
  const petList = await getContactPet();

  return (
    <AuthScreen>
      <div className={wrapper}>
        <div
          style={{
            padding: 10,
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '',
            borderBottom: '1px solid #ddd',
          }}
        >
          <div style={{ display: 'flex' }}>
            <ManageSearchIcon sx={{ color: '#7d7d7d' }} />
            <p style={{ marginLeft: 4, fontWeight: 500 }}>관리자 페이지</p>
          </div>
          <LogoutBtn />
        </div>
        <UserExcelList userList={userList} />
        <PetExcelList petList={petList} />
      </div>
    </AuthScreen>
  );
}
