const {transformFileSync} = require('@babel/core')
const LogPlugin = require('./../plugins/log')
const path = require('path')

const {code} = transformFileSync(path.join(__dirname, './code.js'), {
  plugins: [LogPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
})

console.log('code====== \n', code);
