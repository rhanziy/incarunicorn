import Image from 'next/image';
import Link from 'next/link';
import * as style from '@/app/styles/container.css';
import theme from '@/app/styles/theme.css';
import { container, imgContainer } from './styles/style.css';
import { CopyButton } from './CopyButton';

export function TopProfile() {
  return (
    <div className={container}>
      <div className={imgContainer}>
        <Image
          src="/images/profileImage.jpg"
          alt="프로필 이미지"
          priority
          width={300}
          height={394}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2
          style={{
            lineHeight: 1.3,
          }}
        >
          안녕하세요! <br />
          유니콘 사업팀 대표 김성민 입니다.
        </h2>
        <p>
          다양한 경험을 통한 배움의 가장 큰 가치는 진심입니다.
          <br />
          작은일에 충성을 다해야 큰일도 이뤄 낼 수 있다는 마음으로 하는 일의
          크기와 상관없이 최선을 다하겠습니다.
          <br />
          36개 보험사 상품 비교를 통해 제 자신에게 설득되지 않는 상품은 권하지
          않겠습니다.
        </p>

        <p
          style={{
            marginTop: theme.margin.large,
            marginBottom: theme.margin.small,
            fontWeight: 600,
            fontSize: theme.fontSize.sLarge,
          }}
        >
          인카금융서비스(주) 유니콘사업단
        </p>
        <div className={style.flexCenter}>
          <p>
            <span style={{ fontWeight: 600 }}>T.</span> 010-4274-2111
          </p>
          <p
            style={{
              marginLeft: theme.margin.small,
              color: '#0e69c9',
              fontSize: theme.fontSize.small,
              fontWeight: 500,
            }}
          >
            <a href="tel:010-4274-2111">통화하기</a>
          </p>
        </div>
        <div className={style.flexCenter}>
          <p>
            <span style={{ fontWeight: 600 }}>F.</span> 0504-347-2111
          </p>
          <CopyButton />
        </div>
        <p>
          <span style={{ fontWeight: 600 }}>A.</span> 경기 수원시 영통구 신원로
          55 1408호
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: theme.margin.base }}>
          <p
            style={{
              fontSize: theme.fontSize.small,
              textDecoration: 'underline',
              color: '#a3a3a3',
            }}
          >
            <Link href="mailto:">Email</Link>
          </p>
          <p
            style={{
              fontSize: theme.fontSize.small,
              textDecoration: 'underline',
              color: '#a3a3a3',
            }}
          >
            Instagram
          </p>
          <p
            style={{
              fontSize: theme.fontSize.small,
              textDecoration: 'underline',
              color: '#a3a3a3',
            }}
          >
            Toss
          </p>
        </div>
      </div>
    </div>
  );
}
