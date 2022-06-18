### 常见 AST 节点

#### 字面量 （Literal）

```js
// 'ast' 就是一个字符串字面量 StringLiteral
let babel = 'ast'

// 其他常见字面量：
/**
 * 'test' => StringLiteral
 * `test` => TemplateLiteral
 * 1234 => NumbericLiteral
 * true => BooleanLiteral
 * /^\.js$/ => RegExpLiteral
 * 1.23456n => BigintLiteral
 * null => NullLiteral
 * ...
 * /
```

#### 标识符（Identifier）
> 变量名、属性名、参数名等各种声明和引用的名字都是Identifier
> JS 标识符特点：只能包含字母或数字或下划线（_）或美元符号（$），且不能以数字开头

```js
const name = 'babel'

function fn(params) {
  console.log(params)
}

const obj = {
  key: 'string'
}

// 以上代码段中标识符：
// 1. name
// 2. fn、params、console、log、params
// 3. obj、key
```

#### 语句（Statement）

> 语句是可以单独执行的单位，比如：break、continue、debugger、return、if语句、while语句、for、语句、声明语句、表达式语句等
> 语句是代码可执行的最小单位，每一条可执行的代码都是语句

```js
// BreakStatement
break;
// ContinueStatement
continue;
// DebuggerStatement
debugger;
// ReturnStatement
return;
// ThrowStatement
throw Error();
// BlockStatement
{};
// TryStatement
try {
  
} catch (error) {
  
}
// ForStatement
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// ...
```

#### 声明语句（Declaration）

> 声明语句的执行逻辑是在作用域内声明一个变量、函数、class、import、export等

```js
// VariableDeclaration
const a = 1
// FunctionDeclaration
function fn() {}
// ClassDeclaration
class Test{}
// ImportDeclaration
import React from 'react'
// ExportDefaultDeclaration
export default fn
// ExportNamedDeclaration
export {fn}
// ExportAllDeclaration
export * from 'react'
```

#### 表达式（Expression）

> 特点是执行以后有返回值，这是和语句（Statement）的区别
> 表达式的特点是有返回值，有的表达式可以独立作为语句执行，会包裹一层 ExpressionStatement

```js
// ArrayExpression
[1,2,3]
// AssignmentExpression
a = 1
// BinaryExpression
1 + 2;
// UnaryExpression
-1;
// FunctionExpression
function(){};
// ArrowFunctionExpression
() => {};
// ClassExpression
class{};
// Identifier
a;
// ThisExpression
this;
// Super
super;
// BindExpression
a::b;
```

#### Class

> 整个 Class 的内容是 ClassBody，属性是 ClassProperty，方法是 ClassMethod（通过 kind 属性区分是 constructor 还是 method）

#### Modules

> es module是语法级别的模块规范

#### import

```js
// ImportDefaultSpecifier
import a from 'a'
// ImportSpecifier
import {b,c} from 'a'
// ImportNamespaceSpecifier
import * as d from 'a'
```

#### export

```js
// ExportDefaultDeclaration
export default fn
// ExportNamedDeclaration
export {fn}
// ExportAllDeclaration
export * from 'react'
```

#### Program & Directive

> Program 是代表整个程序的节点，它有 body 属性代表程序体，存放 Statement 数组；还有 directives 属性，存放 Directive 节点，比如：‘use strict’

#### File & Comment

> ast 最外层节点就是 File，它有 program、comments、tokens等属性，分别存放 Program 程序体、注释、token等

```js
// CommentLine
// line

// Commentblock
/* block */
```


#### AST 公共属性

- type: AST节点的类型
- start、end、loc：start和end代表该节点对应的源码字符串的开始和结束下标，不区分行列。而 loc 属性是一个对象，记录 line 和 column 属性分别开始和结束行列号
- leadingComments、innerComments、trailingComments：表示开始的注释、中间的注释、结尾的注释
- extra：记录一些额外的信息