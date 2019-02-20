const path = require("path");

module.exports = {
    publicPath: '<vlider>',
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [path.resolve(__dirname, "./src/assets/styles/global.scss")]
        }
    }
};