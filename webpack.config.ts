import path from "path";
import webpack from "webpack";
import { BuildMode, BuildPaths } from "./config/build/types";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode: BuildMode = (process.env.MODE as BuildMode) ?? "development";
const port: number = process.env.PORT
  ? parseInt(process.env.PORT as string)
  : 3000;
const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  port,
});
// return config;

export default config;
