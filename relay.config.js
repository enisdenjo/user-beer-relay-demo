const typescript = require('relay-compiler-language-typescript');

module.exports = {
  language: typescript,
  schema: './schema.graphql',
  src: './src',
  exclude: ['**/node_modules/**', '**/__generated__/**'],
};
