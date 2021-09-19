module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.jsx', '.tsx'],
			},
		},
		'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb-typescript'],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'function-paren-newline': 0,
		'object-curly-newline': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': 0,
		'import/prefer-default-export': 0,
		'implicit-arrow-linebreak': 0,
		'jest/no-mocks-import': 'off',
		'prettier/prettier': 'error',
		'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
	},
};