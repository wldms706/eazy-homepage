// 관리자 이메일 목록
export const ADMIN_EMAILS = [
  'wldms706@gmail.com',
];

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}
