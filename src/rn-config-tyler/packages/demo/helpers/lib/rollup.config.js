import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
// import jsx from 'acorn-jsx';
import pkg from "./package.json";

const external = Object.keys(pkg.dependencies).concat([
  "path",
  "fs",
  "typescript",
]);

// export default {
//     plugins: [typescript({ sourceMap: false })],
//     external,
//     output: [
//         { format: 'cjs', file: pkg.main, exports: 'auto' },
//         { format: 'esm', file: pkg.module }
//     ]
// };

export default {
  input: "./src/index.js",
  plugins: [typescript({ sourceMap: false })],
  output: [{ format: "esm", file: "./dist/index.es.js" }],
};
