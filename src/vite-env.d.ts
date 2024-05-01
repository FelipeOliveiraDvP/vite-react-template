/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_APP_TITLE?: string;
  readonly VITE_APP_DESCRIPTION?: string;
  readonly VITE_APP_HOME?: string;
  readonly VITE_JWT_TOKEN_KEY?: string;
  readonly VITE_TEST_AUTH_MODE?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
