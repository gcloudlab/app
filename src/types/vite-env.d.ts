/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_BASE_URL: string;
  VITE_APP_SERVER_URL: string;
}

declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/theme/github.js';
