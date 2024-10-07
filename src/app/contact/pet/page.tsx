import * as style from './styles/style.css';
import theme from '../../styles/theme.css';
import { ContactPetForm } from './components/ContactPetForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '펫 보험 상담 이벤트',
  description: '이벤트 페이지입니다.',
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_API_URL}/contact/pet`,
    images: [
      {
        url: '/pet-ogimage.png',
        alt: '썸네일',
      },
    ],
  },
};

export default function ContactPet() {
  return (
    <>
      <div className={style.container}>
        <p
          style={{
            fontSize: theme.fontSize.small,
          }}
        >
          두구두구 X 인카금융서비스
        </p>
        <h2 style={{ marginTop: theme.margin.negativeSmall }}>
          펫보험 상담 이벤트 신청
        </h2>
        <p>안녕하세요! 두구두구입니다.</p>
        <p>
          이벤트 신청을 위해{' '}
          <span style={{ fontWeight: 600 }}>반려동물 정보</span>를 기입해주세요.
        </p>
        <p
          style={{
            fontSize: theme.fontSize.small,
            marginTop: theme.margin.base,
          }}
        >
          1-2일 내에{' '}
          <span style={{ fontWeight: 600 }}>
            펫보험 전문가 매칭 후 이벤트 확인
          </span>{' '}
          연락을 드립니다.
        </p>
        <p style={{ fontSize: theme.fontSize.small }}>
          (*시흥 패스권은{' '}
          <span style={{ fontWeight: 600 }}>상담 완료 후 현장지급</span>{' '}
          해드립니다.)
        </p>

        <ContactPetForm />
      </div>
    </>
  );
}
