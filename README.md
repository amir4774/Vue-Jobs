# Project Overview

![screen](https://github.com/user-attachments/assets/66184a02-d1d3-4831-84c5-6776c417abd2)

This project shows front-end jobs to which you can add jobs or edit or delete existing jobs. In this project, a JSON-Server is used, which can be used to get the list of jobs from the jobs.json file with the help of Axios and make changes to it.

## The libraries used are:
TypeScript, Vue.js, Vue-Router, Vue-Spinner, Vue-Toastification, Axios, JSON-Server, primeicons, Tailwind CSS.

## Note
Because this project uses a json-server to get data, the [site implemented by Netlify](https://comfy-moonbeam-4b0be8.netlify.app/) does not show the list of jobs correctly. If you want to know how the website works, run it on your device.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Server
```sh
npm run server
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
