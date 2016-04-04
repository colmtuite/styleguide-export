const path = require('path');
const assetDir = path.resolve(__dirname, 'src', 'assets');

module.exports = eyeglass => {
    eyeglass.assets.addSource(assetDir, {
        pattern: 'images/**/*',
    });
    return eyeglass;
};
