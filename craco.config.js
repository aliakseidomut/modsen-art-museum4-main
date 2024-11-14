const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@types": path.resolve(__dirname, "src/types/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@context": path.resolve(__dirname, "src/context/"),
    },
  },
};
