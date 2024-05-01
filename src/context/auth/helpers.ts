const { VITE_JWT_TOKEN_KEY } = import.meta.env;
const TOKEN_KEY = VITE_JWT_TOKEN_KEY || 'BACKOFFICE';

export function setAuthToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
