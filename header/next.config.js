const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "header",
      library: { type: config.output.libraryTarget, name: "header" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./components/Header",
      },
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3001/_next/";
    }

    return config;
  },
};
