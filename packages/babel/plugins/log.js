const generate = require('@babel/generator').default
const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

module.exports = function(api, options) {
  const { template, types } = api
  console.log('api',Object.keys(api));

  return {
    visitor: {
      CallExpression(path, state){
        if (path.node.isNew) return
        const {callee, loc, arguments} = path.node
        const calleeName = generate(callee).code
        // console.log('calleeName',calleeName);
    
        if (targetCalleeName.includes(calleeName)) {
          // console.log('callee====', callee);
          const { line, column } = loc.start
          const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)()
          // console.log('newNode',newNode);
          newNode.isNew = true
    
          if (path.findParent(path => path.isJSXElement())){
            path.replaceWith(types.arrayExpression([newNode, path.node]))
            path.skip()
          } else {
            path.insertBefore(newNode)
          }
        }
      }
    }
  }
}