import { Metadata } from 'next';
import AuthScreen from '../components/auth/AuthScreen';
import { getContactData, getTotalContactCount } from '../contact/action';
import theme from '../styles/theme.css';
import { LogoutBtn } from './components/LogoutBtn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { UserList } from './components/UserList';
import { PetList } from './components/PetList';
import { UserExcel } from './components/UserExcel';
import { PetExcel } from './components/PetExcel';
import { Divider } from '../components/Divider';

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

export default async function Admin({
  searchParams,
}: {
  searchParams: { userPage?: string; petPage?: string };
}) {
  const userPage = searchParams.userPage ? parseInt(searchParams.userPage) : 1;
  const petPage = searchParams.petPage ? parseInt(searchParams.petPage) : 1;

  const userCount = await getTotalContactCount('contactUser');
  const petCount = await getTotalContactCount('contactPet');

  const { contactData: contactUser } = await getContactData(
    'contactUser',
    userPage,
  );
  const { contactData: contactPet } = await getContactData(
    'contactPet',
    petPage,
  );

  return (
    <AuthScreen>
      <div
        style={{
          paddingBottom: theme.padding.base,
          width: '100%',
        }}
      >
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

        {contactUser.length > 0 && (
          <>
            <UserExcel />
            <UserList
              userList={contactUser}
              totalCount={userCount}
              page={userPage}
            />
            <Divider />
          </>
        )}
        {contactPet.length > 0 && (
          <>
            <PetExcel />
            <PetList
              petList={contactPet}
              totalCount={petCount}
              page={petPage}
            />
          </>
        )}
      </div>
    </AuthScreen>
  );
}
