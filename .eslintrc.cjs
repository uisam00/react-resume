module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'eslint-plugin-import-helpers',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-param-reassign': 'off',
        'react/require-default-props': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/no-unstable-nested-components': 'off',
        'import/no-unresolved': 'off',
        'no-nested-ternary': 'off',
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'always',
                groups: [
                    'module',
                    '/^@shared/',
                    ['parent', 'sibling', 'index'],
                ],
                alphabetize: {
                    order: 'asc',
                    ignoreCase: true,
                },
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/test.jsx',
                    '**/*.config.ts',
                    '**/*.config.tsx',
                ],
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx', '.jsx'],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'max-len': [
            'warn',
            {
                code: 120,
            },
        ],
        'consistent-return': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true,
            },
        ],
    },
};
