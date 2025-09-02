export function JwtDecode(token: string | null): any {
  if (!token) return null;
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
}
