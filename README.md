# RN Composable UI (Starter Kit)
![Beta](https://github.com/applerdotxyz/rn-composable-ui/workflows/Beta/badge.svg)


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
