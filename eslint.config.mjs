import antfu from '@antfu/eslint-config';

export default antfu({
	react: true,
	stylistic: false,
	jsonc: false,
	yaml: false,
	toml: false,
	markdown: false,
	imports: false,
	rules: {
		eqeqeq: 'warn',
		'import/newline-after-import': 'warn',
		'perfectionist/sort-named-imports': 'warn',
		'perfectionist/sort-named-exports': 'warn',
		'perfectionist/sort-imports': 'warn',
		'perfectionist/sort-exports': 'warn',
	},
});
