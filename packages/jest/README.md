# Jest 

推荐：[Jest 实践指南](https://github.yanhaixiang.com/jest-tutorial/)

## Jest 常用 API



## Jest 实践

### 代码转译

> Jest 本身不做代码转译，执行测试时，可调用已有的转译器（babel、tsc、esbuild、swc）来做代码转译

以 `tsc` 为例

```bash
pnpm add typescript - D
pnpm add ts-jest @types/jest - D
```

配置 `jest.config.js`
```js
module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // ...
}
```

### 测试环境

> 跑浏览器端的测试 case 时，浏览器特有的 API，如何进行模拟？

- 配置 `setupFilesAfterEnv` 或 `setupFiles`

配置 `jest.config.js`
```js
module.exports = {
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./tests/jest-setup.ts'],
}
```

- 配置 [jsdom](https://github.com/jsdom/jsdom) 测试环境

```js
配置 `jest.config.js`
module.exports = {
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
}
```

### 测试驱动开发

- TDD（Test Driven Development）
  先写测试 case，再补充业务
- BDD（Behavior Driven Development）
  先写业务，再补充测试 case


### Mock Logger

- 设置 `jest-setup.ts`

  ```js
  // tests/jest-setup.ts
  jest.spyOn(console, 'log').mockReturnValue();
  jest.spyOn(console, 'info').mockReturnValue();
  jest.spyOn(console, 'warn').mockReturnValue();
  jest.spyOn(console, 'error').mockReturnValue();
  ```

- 引用 [jest-mock-console](https://github.com/bpedersen/jest-mock-console)

  ```js
  // tests/jest-setup.ts
  import mockConsole from "jest-mock-console";

  mockConsole()
  ```