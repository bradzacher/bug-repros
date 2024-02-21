Repro:

- clone repo
- checkout `ts-js-issue-huh` branch
- `npm i`
- open in vscode
- open `foo.ts`
    - notice no errors
- at the same time open `foo.js`
- notice an error shows in `foo.ts`:

```
Type '{ plugins: { react: { deprecatedRules: any; rules: any; }; }; rules: any; readonly languageOptions: any; } & { languageOptions: any; rules: { 'react/display-name': number; 'react/jsx-key': number; 'react/jsx-no-comment-textnodes': number; ... 18 more ...; 'react/require-render-return': number; }; }' does not satisfy the expected type '{ plugins: { react: { rules: any; }; }; }'.
  The types of 'plugins.react' are incompatible between these types.
    Object literal may only specify known properties, and 'deprecatedRules' does not exist in type '{ rules: any; }'.
```
