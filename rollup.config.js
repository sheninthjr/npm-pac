import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "src/components/Forms/Forms.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.d.ts",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      extract: "dist/index.css",
      modules: false,
      minimize: true,
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),
    copy({
      targets: [{ src: "src/index.css", dest: "dist" }],
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};

export default config;
