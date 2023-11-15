/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CORS_ANYWHERE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
