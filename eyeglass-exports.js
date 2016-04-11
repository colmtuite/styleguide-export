const path = require('path');

module.exports = () => ({
    assets: {
        httpPrefix: 'assets',
        relativeTo: '/marvel-styleguide',
        sources: [{
            directory: path.resolve(__dirname, 'src', 'assets'),
            globOpts: {
                pattern: 'images/**/*',
            },
        }],
    },
});
