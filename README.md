# Message Flow

## Project setup

```
yarn
```

## Compiles and hot-reloads for development

```
yarn start
```

## Test your code

```
yarn test
```

## Compiles and minifies for production

```
yarn build
```

## Setting

1. 两条消息之间超过 3min，则显示时间

## Description

这是一个类似微信的渲染消息流的组件。

支持不同类型 

- 文本 
- 图片 
- 系统消息，例如加好友

### Link

- GitHub: https://github.com/bowen-wu/message_flow

### 技术栈

React + TS + Ant Design + Sass + Lint(Husky + Eslint + Prettier 等) + Test Library + Travis CI + Dayjs

### TODO

Image Modal 可以放置在最外层，点击后，将 messageHistory filter 进去，之后在将点击的 message 传入进去，可以做个 Carousel

### 技术点

1. 组件化
2. Unit Test
3. Continuous Integration
4. Dayjs 设置时区解决 Travis CI 时区问题
