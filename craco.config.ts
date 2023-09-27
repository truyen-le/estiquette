const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@main": path.resolve(__dirname, "src", "main"),
      "@infra": path.resolve(__dirname, "src", "infra"),
      "@data": path.resolve(__dirname, "src", "data"),
      "@domain": path.resolve(__dirname, "src", "domain"),
      "@presentation": path.resolve(__dirname, "src", "presentation"),
    },
  },
};
