/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DATABASE_URl: string;
	readonly VITE_PROJECT_URL: string;
	readonly VITE_ANON_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
