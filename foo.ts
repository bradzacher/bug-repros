import eslintReact from 'eslint-plugin-react/configs/recommended.js';

(eslintReact satisfies {
  plugins: {
      react: {
          rules: any;
      };
  };
});
