module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    } 
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react',
            'react-refresh',
            'react-hooks',
            'prettier-plugin-tailwindcss'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes": [
            "error",
            "single"
        ],
        "no-plusplus": "off",
        "no-shadow": "off",
        "indent": ["error", 2]
  },
}