/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_TITLE?: string;
  readonly VITE_DESCRIPTION?: string;
  readonly VITE_HOME?: string;
  readonly VITE_STORAGE_KEY?: string;
  readonly VITE_PRIMARY_COLOR?: string;
  readonly VITE_TEST_AUTH_MODE?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
