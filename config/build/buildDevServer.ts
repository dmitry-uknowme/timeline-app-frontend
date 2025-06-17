import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { port } = options;
  return { port, open: true };
};

export default buildDevServer;
