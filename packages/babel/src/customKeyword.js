const acorn = require('acorn')

let Parser = acorn.Parser
Parser.acorn.keywordTypes['asyncguo'] = new acorn.TokenType('asyncguo', {
  keyword: 'asyncguo'
})

const NextParser = Parser.extend(customKeywordParser)

const ast = NextParser.parse(`
  asyncguo
  const a = 1
`)

console.log('ast',ast);

function customKeywordParser(_Parser) {
  return class extends _Parser {
    parse(program) {
      let newKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super";
      newKeywords += " asyncguo"
      console.log('program', program);

      this.keywords = new RegExp("^(?:" + newKeywords.replace(/ /g, '|') + ')$')
      return super.parse(program)
    }

    parseStatement(context, topLevel, exports) {
      var starttype = this.type

      if (starttype == _Parser.acorn.keywordTypes['asyncguo']) {
        var node = this.startNode()
        return this.parserCustomKeyword(node)
      } else {
        return super.parseStatement(context, topLevel, exports)
      }
    }

    parserCustomKeyword(node) {
      this.next()
      return this.finishNode({
        value: 'asyncguo'
      }, 'AsyncguoStatement')
    }
  }
}