import { defineConfig } from 'drizzle-kit';
if (!import.meta.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url: import.meta?.env?.DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'postgresql'
});
