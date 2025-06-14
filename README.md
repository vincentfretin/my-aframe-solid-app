# Networked-Aframe project with Vite and SolidJS

That project was created from [that tutorial](https://github.com/c-frame/aframewiki/blob/gh-pages/en/pages/solidjs.md).

Demo: https://vincentfretin.github.io/my-aframe-solid-app/

The demo is hosted on GitHub Pages so networked-aframe was disabled with `networked-scene="connectOnLoad: false; ..."` in `src/Scene.tsx`.
If you run the example on your machine or a server, don't forget to change `connectOnLoad` back to `true`.

## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [https://localhost:5173](https://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)
