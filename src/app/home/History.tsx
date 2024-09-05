import theme from "../styles/theme.css";

export const History = () => {
  return (
    <>
      <div style={{ marginTop: theme.margin.xLarge }}>
        <h2>하는 일</h2>
        <p style={{ fontSize: theme.fontSize.sLarge, fontWeight: 600 }}>
          • 개인 및 사업자 종합금융상품 제안
        </p>
        <p>
          - 고객의 경제적 안정과 행복을 지키는 신념을 잃지 않겠습니다. 36개의
          국내 생명/손해 보험사의 다양한 금융 상품을 토대로 고객님께 합리적인
          맞춤 금융 서비스를 제공하겠습니다.
        </p>
        <p
          style={{
            fontSize: theme.fontSize.sLarge,
            fontWeight: 600,
            marginTop: theme.margin.base,
          }}
        >
          • 스타트업 및 법인 재무 컨설팅
        </p>
        <p>
          - 투명하고 당당하게 숫자로 보여지는 기업을 운영하시는 대표님께
          신뢰라는 단어 하나로 인사드리겠습니다. 컨설팅을 통해 재무 건전성을
          높이고 깔끔한 일처리 능력을 보여드리겠습니다.
        </p>
      </div>

      <div style={{ marginTop: theme.margin.xLarge }}>
        <h2>걸어온 길</h2>
        <p style={{ fontSize: theme.fontSize.sLarge, fontWeight: 600 }}>
          • (주)동네티콘 CSO (2021-2024)
        </p>
        <p>
          - 전략 기획 및 BM 구축
          <br />
          - 영업팀 관리
          <br />- 세무, 회계 관리
        </p>
        <p
          style={{
            fontSize: theme.fontSize.sLarge,
            fontWeight: 600,
            marginTop: theme.margin.base,
          }}
        >
          • 이지나우(주) 대표 (2022-2024)
        </p>
        <p>- 스타트업 재무 컨설팅</p>
        <p
          style={{
            fontSize: theme.fontSize.sLarge,
            fontWeight: 600,
            marginTop: theme.margin.base,
          }}
        >
          • KT M&S(2017~2021)
        </p>
        <p>- 우수 판매점 관리 운영</p>
        <p
          style={{
            fontSize: theme.fontSize.sLarge,
            fontWeight: 600,
            marginTop: theme.margin.base,
          }}
        >
          • 라이나 생명(2017)
        </p>
        <p>- 팀장 근무</p>
        <p
          style={{
            fontSize: theme.fontSize.sLarge,
            fontWeight: 600,
            marginTop: theme.margin.base,
          }}
        >
          • 군복무 (2014-2016)
        </p>
        <p>- 특전사 국제평화지원단</p>
      </div>
    </>
  );
};
