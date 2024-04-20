const { VITE_JWT_TOKEN_KEY } = import.meta.env;

export function setAuthToken(token: string): void {
  localStorage.setItem(VITE_JWT_TOKEN_KEY, token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem(VITE_JWT_TOKEN_KEY);
}

export function removeAuthToken(): void {
  localStorage.removeItem(VITE_JWT_TOKEN_KEY);
}
