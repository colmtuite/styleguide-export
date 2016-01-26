var path = require("path"),
    rootDir = __dirname,
    assetDir = path.join(rootDir, "assets");

module.exports = function(eyeglass, sass) {
    eyeglass.assets.addSource(assetDir, {
      pattern: "images/**/*"
    });
    return eyeglass;
};
