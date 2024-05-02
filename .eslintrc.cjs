module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['no-comments'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'no-console': 'error',
    'no-comments/disallowComments': [
      'error',
      {
        allow: ['TODO', 'FIXME', 'NOTE', 'DEBUG', 'EX'],
      },
    ],
  },
};
