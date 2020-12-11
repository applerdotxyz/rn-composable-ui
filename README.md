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

[Demo](https://rn-composable-ui.applerdotxyz.vercel.app/)
- `react-native` with `expo`
- `expo-web` based web
- `react-navigation`
- `nextjs` like structure
- TODO: capability to have `api` code

- Setup your project with Expo
  - Install the CLI: `npm i -g expo-cli`
  - `cd` into the project `npm i` or `yarn`
  - Start the project with `yarn web`
  - Copy `src/config/env.ts` to create `src/config/env.dev.ts` for maintaining your env data
  - Go to `http://localhost:19006/` to see your project!

### 🏁 New Commands

- **Starting web**

  - ✅ `yarn web`

- **Building web**

  - ✅ `expo build:web` and then serve from any server

#### Noteworthy

- Configuration based routes (from `pages` directory)
- then passed onto the `Navigator` component in `App.tsx`
<hr>

## Documentation
### Redux Implementation
- In the `src\state-mgmt` folder their exist 4 files
    - `src\state-mgmt\actions.ts`
        - Some constants are defined within action.ts
        - Here all the actions for the UI Boilerplate is defined
          - `doLogin` ==> For Login part
          - `updateState` ==> Update the state with a dispatch as `lastEmail`
    - `src\state-mgmt\app.ts`
        - Here `initialState` of app is defined.
    - `src\state-mgmt\reducers.ts`
        - Here all the reducer are stated where
          - For different actions which were defined in `action.ts` file are added in switch case for that particular user as reducers.
          - env as reducer is also defined here.
    - `src\state-mgmt\store.ts`
        - Overall store creation with inital state and persistedReducers are defined in `store.ts` file.
