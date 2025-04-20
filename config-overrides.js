// filepath: /home/pkcibiyanna/Projects/cp-showdown/cp-showdown-client/config-overrides.js
const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
    "@assets":path.resolve(__dirname, "src/assets"),
    "@components":path.resolve(__dirname, "src/components"),
    "@types": path.resolve(__dirname, "src/types"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@lib": path.resolve(__dirname, "src/lib"),
    "@provider": path.resolve(__dirname, "src/providers"),
    "@contexts": path.resolve(__dirname, "src/contexts")
  };
  return config;
};
