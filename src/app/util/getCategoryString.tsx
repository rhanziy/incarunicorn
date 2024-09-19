const categoryText: { [key: string]: string } = {
  join: '보험을 가입하고 싶어요.',
  inquiry: '보험료가 괜찮은지 궁금해요.',
  check: '내 보험 상태를 점검받고 싶어요.',
  claim: '병원비를 청구하고 싶어요.',
  question: '간단한 질문이 있어요.',
};

export const getCategoryString = (category: string): string => {
  return categoryText[category] || '카테고리 없음';
};
