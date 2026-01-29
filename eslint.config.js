import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
	js.configs.recommended,
	{
		files: ['src/**/*.{js,mjs,cjs,ts,svelte}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020,
				extraFileExtensions: ['.svelte']
			},
			globals: {
				browser: true,
				es2017: true,
				node: true
			}
		},
		plugins: {
			'@typescript-eslint': typescript,
			svelte: svelte
		},
		rules: {
			...typescript.configs.recommended.rules,
			...svelte.configs.recommended.rules,
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn'
		}
	},
	{
		files: ['src/**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: typescriptParser
			}
		}
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'/build',
			'/.svelte-kit/**',
			'/package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.json',
			'yarn.lock',
			'.firebase/**',
			'static/**',
			'**/*.generated.*',
			'**/generated/**',
			'**/output/**',
			'**/chunks/**',
			'**/immutable/**',
			'**/entries/**',
			'**/fallbacks/**',
			'**/pages/**',
			'**/remote-entry.js',
			'**/index.js',
			'**/internal.js',
			'**/shared.js',
			'**/utils.js',
			'**/state.svelte.js',
			'**/exports.js',
			'**/index2.js',
			'**/app.js',
			'**/nodes/**',
			'**/entry/**',
			'**/app.1hqcOAQ_.js',
			'**/0.BNmIC0Cn.js',
			'**/2.Cz9lLfgP.js',
			'**/9v8kIUSl.js',
			'**/CHd1lNHs.js',
			'**/CqFsWBH9.js',
			'**/D4r213zI.js',
			'**/D5zbXJAG.js',
			'**/DEE7KJNe.js',
			'**/DVpwHW_c.js',
			'**/DZdareNs.js',
			'**/DloYWmwc.js',
			'**/DsnmJJEf.js',
			'**/KbJ2jdFV.js'
		]
	}
];
