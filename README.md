# Steps to setup a new node 22 project

1. npm --init -y
2. npm install --save-dev typescript ts-node @types/node
3. Set "type": "module" in package.json
4. npx tsc --init
5. Edit tsconfig.json
6. Add src folder
7. Setup basic scripts (dev, build, start) in package.json
8. Setup nodemon: npm i --save-dev nodemon and add dev:watch script
9. Setup eslint and prettier:

```
npm install --save-dev \
  eslint \
  typescript-eslint \
  eslint-plugin-prettier \
  eslint-config-prettier \
  prettier
```

10. Create eslint.config.js, .prettierignore, and .prettierrc.json files
11. Add lint and format scripts to package.json
12. Create .vscode/settings.json and make sure global settings are not overriding local settings
13. Setup jest: npm install --save-dev jest ts-jest @types/jest
14. npx ts-jest config:init
15. Edit jest.config.ts
16. Add tests scripts, test, test:coverage, test:watch, test:changed
17. Setup .gitignore and initialize git
