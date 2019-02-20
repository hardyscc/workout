# Workout (from Ben awad)

Testing project on following technologies.

- typescript
- monorepo web and mobile app
- react-native-web for web UI
- mobx for state management

# Prerequisite

```
npm -g install wml
```

# Setup

## setup auto build again common module

```
yarn install
cd packages/common
yarn watch
```

## start web

```
cd packages/web
yarn start
```

## start ios application

setup wml

```
cd packages/app
wml add ../common/ ./node_modules/@workout/common
wml start
```

start server

```
cd packages/app
yarn start
```

start ios app

```
cd packages/app
yarn ios
```
