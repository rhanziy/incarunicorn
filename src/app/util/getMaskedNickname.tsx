export function getMaskedNickname(nickname: string): string {
  if (!nickname) {
    return '';
  }
  // 닉네임이 한 글자인 경우, 그대로 반환
  if (nickname.length === 1) {
    return nickname;
  }

  // 닉네임이 두 글자인 경우, 마지막 글자를 *로 대체
  if (nickname.length === 2) {
    return `${nickname[0]}*`;
  }

  // 첫 글자와 마지막 글자를 제외한 부분을 *로 대체
  const maskedMiddle = '*'.repeat(nickname.length - 2);
  return nickname[0] + maskedMiddle + nickname[nickname.length - 1];
}
