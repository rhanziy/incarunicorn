import Link from 'next/link';
import Image from 'next/image';
import ConsultingFeature from './ConsultingFeature';
import theme from '../styles/theme.css';
import { flexColumnAllCenter } from '../styles/container.css';

export function ProConsulting() {
  return (
    <div style={{ marginTop: theme.margin.xLarge }}>
      <h2 style={{ fontSize: theme.fontSize.large }}>AI 프로상담</h2>
      <p>
        현재 보험시장의 패러다임은 다양한 보험사의 장점을 나타낸 상품을 비교
        분석하는 GA시장으로 변화하고 있습니다. IT 회사 운영경험을 통해 시작한 AI
        보험 컨설팅은 보다 더 꼼꼼하고 투명하게 상품을 비교해드립니다! 간단한
        보험 문의부터 보험료 청구 외 유니콘 사업단은 AI프로 상담을 통해 36개
        보험사 데이터를 종합하여 최적의 솔루션을 제시하며 상담해드립니다.
      </p>
      <ConsultingFeature />
      <p>
        AI프로 상담은 고객 만족도 99%로 간단한 보험 문의부터 보험료 청구 외
        유니콘 사업단은 AI프로 보장분석을 통해 34개 보험사 데이터를 종합하여
        보험 가입 및 비교 분석하여 최적의 솔루션을 제시하며 상담해드립니다.
      </p>
      <div
        style={{
          marginTop: theme.margin.base,
          borderRadius: 6,
          padding: theme.padding.small,
          paddingLeft: theme.padding.base,
          backgroundColor: '#e6d9ff',
        }}
      >
        <Link href="/reviews?page=1" scroll={false}>
          <p
            style={{
              color: '#6f5d91',
              fontWeight: 600,
              fontSize: theme.fontSize.sLarge,
            }}
          >
            고객 후기 구경하러 가기 →{' '}
          </p>
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: theme.margin.large,
        }}
      >
        <div
          className={flexColumnAllCenter}
          style={{
            alignItems: 'flex-start',
            width: '50%',
          }}
        >
          <p>1. 이런분들이 신청해요.</p>
          <Image
            src="/images/step/1.png"
            alt="step1"
            width={200}
            height={0}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div
          className={flexColumnAllCenter}
          style={{ alignItems: 'flex-start', width: '50%' }}
        >
          <p>2. 결과지를 받아보세요.</p>
          <Image
            src="/images/step/3.png"
            alt="step1"
            width={200}
            height={0}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div
          className={flexColumnAllCenter}
          style={{
            width: '50%',
            marginTop: theme.margin.base,
          }}
        >
          <p style={{ alignSelf: 'flex-start' }}>
            3. 궁금한 부분을 상담해 드려요.
          </p>
          <Image
            src="/images/step/2.png"
            alt="step1"
            width={200}
            height={0}
            style={{
              marginTop: theme.margin.small,
              width: '85%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          className={flexColumnAllCenter}
          style={{
            width: '50%',
            marginTop: theme.margin.base,
          }}
        >
          <p style={{ alignSelf: 'flex-start' }}>4. 솔루션 제안</p>
          <Image
            src="/images/step/4.png"
            alt="step1"
            width={200}
            height={0}
            style={{
              marginTop: theme.margin.small,
              width: '90%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  );
}
