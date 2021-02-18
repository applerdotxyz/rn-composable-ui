# RN Composable UI (Starter Kit)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/applerdotxyz/rn-composable-ui)


![Beta](https://github.com/applerdotxyz/rn-composable-ui/workflows/Beta/badge.svg)

![E2E](https://github.com/applerdotxyz/rn-composable-ui/workflows/E2E/badge.svg)

--- 
<p align="center">
  
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/applerdotxyz/rn-composable-ui">

  <img alt="GitHub" src="https://img.shields.io/github/license/applerdotxyz/rn-composable-ui">
</p>

---



### A mobile starter template with Configurability and Composability

#### Demo
[Demo](https://rn-compose.saurabhxyz.vercel.app/)
![demo for the router](https://github.com/applerdotxyz/rn-config-tyler/blob/main/demo-config-router.png)

#### Features
- uses configurable UI layouts uses [rn-config-tyler](https://www.npmjs.com/package/rn-config-tyler)
- uses configurable UI components (forms, lists, imagebox, videos etc.)
- uses multi-render routing capabilities (thanks to saurshaz/rn-config-tyler TODO: insert codesandbox.io link)
- uses configurable event-binding capabilities (TODO: insert codesandbox.io link)
- uses `jsoneditor` based `json-browser` to provide for modifying any of the configs on the fly (dev mode)
- `react-native` with `expo`
- `expo-web` and `react-native-web` based web rendering
- TODO: capability to have `api` code

- Setup your project with Expo
  - Install the CLI: `npm i -g expo-cli`
  - `cd` into the project `npm i` or `yarn`
  - 1. fetch rn-composable repo (with submodules)
    `git submodule update --remote --recursive`
    2. install dependencies by doing `npm install` from within `rn-config-tyler` folder
    3. install dependencies from main folder `npm install`
    4. run `npm run web`
    5. toggle between example configs using index.js`
  - Copy `.env.sample` to create `.env` for maintaining your env data
  - Go to `http://localhost:19006/` to see your project!

### 🏁 New Commands

- **Starting web**

  - ✅ `yarn web`

- **Building web**

  - ✅ `expo build:web` and then serve from any server


### Env setup
- add a `.env` file bycopying and editing `.env.sample` (in root folder)
