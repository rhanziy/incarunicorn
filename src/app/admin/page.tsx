import { Metadata } from 'next';
import AuthScreen from '../components/auth/AuthScreen';
import { getContactUser } from '../contact/action';
import { getContactPet } from '../contact/pet/action';
import theme from '../styles/theme.css';
import { LogoutBtn } from './components/LogoutBtn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { UserList } from './components/UserList';
import { PetList } from './components/PetList';

export const metadata: Metadata = {
  title: '문의 리스트',
  description: '관리자 페이지입니다.',
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_API_URL}/admin`,
    images: [
      {
        url: '/images/admin-og.png',
        alt: '썸네일',
      },
    ],
  },
};

export default async function Admin() {
  const userList = await getContactUser();
  const petList = await getContactPet();

  return (
    <AuthScreen>
      <div style={{ paddingBottom: theme.padding.large, width: '100%' }}>
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
        <UserList userList={userList} />
        <PetList petList={petList} />
      </div>
    </AuthScreen>
  );
}
