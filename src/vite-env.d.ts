/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEET_ENDPOINT?: string;
  readonly VITE_BASE_PATH?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
