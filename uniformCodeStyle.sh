#!/usr/bin/env bash

yarn add eslint --dev
yarn run eslint --init
touch .eslintignore
echo .eslintrc.js > .eslintignore
yarn add eslint-plugin-bowen-lint eslint-plugin-jsx-a11y eslint-plugin-react-hooks@latest @typescript-eslint/parser -D

# first ] line number
line=$(grep -n ']' .eslintrc.js | sed -n "1"p | cut -d ":" -f 1)
commaLine=`expr $line - 1`

# MacOS sed command
sed -i '' "${commaLine} s/$/,/" .eslintrc.js
sed -i '' "${line}i\\
\        \"plugin:bowen-lint/reactLint\"
" .eslintrc.js
insert='\      quotes: ["error", "single", { allowTemplateLiterals: true }],\
\      indent: ["error", 2],\
\      "comma-dangle": ["error", "never"],\
\      "react/jsx-indent": ["error", 2],\
\      "no-console": ["error", { allow: ["warn", "error"] }],\
\      "react/jsx-tag-spacing": [\
\        "error",\
\        {\
\          closingSlash: "never",\
\          beforeSelfClosing: "allow",\
\          afterOpening: "never",\
\          beforeClosing: "allow"\
\        }\
\      ],\
\      "object-curly-spacing": ["warn", "never"],\
\      "react/jsx-indent-props": ["off", "tab"],\
\      "import/no-unresolved": "off",\
\      "no-unused-vars": "off",\
\      "@typescript-eslint/no-unused-vars": ["error"] \
'
sed -i '' "/rules/ a\\
$insert" .eslintrc.js
sed -i '' "/rules/ a\\ ${insert}" .eslintrc.js
yarn add --dev --exact prettier
touch .prettierrc.js
echo "module.exports = {
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf'
};" > .prettierrc.js
touch .prettierignore
echo "**/*.md
**/*.svg
**/*.ejs
**/*.html
package.json" > .prettierignore

yarn add lint-staged --dev
touch .lintstagedrc.js
echo "module.exports = {
  '**/*.{js,jsx,tsx,ts,scss,md,json}': ['prettier --write', 'git add'],
  '**/*.{js,jsx,ts,tsx}': 'yarn lint-staged:js',
}" > .lintstagedrc.js
yarn add @commitlint/{cli,config-conventional} -D
touch .commitlintrc.js
yarn add commitlint-config-bowen-lint -D
echo 'module.exports = {
    "extends": [
        "bowen-lint"
    ]
}' > .commitlintrc.js

yarn add husky@next --dev
yarn husky install

## MacOS sed command
sed -i '' "/scripts/ a\\
\    \"lint-staged:js\": \"eslint --ext .js,.jsx,.ts,.tsx\",
" package.json
npx husky add .husky/pre-commit "yarn lint-staged"
npx husky add .husky/commit-msg "yarn commitlint --edit"

