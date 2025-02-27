import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwind from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-plugin-prettier';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      prettier,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwind, // ✅ Activation du plugin Tailwind
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'prettier/prettier': 'error', // ✅ Générer une erreur au lieu d'un warning
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // ✅ Ajout des règles Tailwind manuellement
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off', // Désactiver si tu utilises des classes perso
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  },
];
