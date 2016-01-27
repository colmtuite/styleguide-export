# Marvelapp styleguide

Base styling for Marvelapp projects.  
See [marvelapp.github.io/styleguide/](http://marvelapp.github.io/styleguide/) for documentation and usage.

## Installing

Clone the repository then `npm install`.

### With sass-eyeglass

This is a [sass-eyeglass](https://github.com/sass-eyeglass/eyeglass) module. That means you can set up your project to import any sass files or assets (images, fonts, .etc) by using simple import statements like so:

```scss
@import "marvel-styleguide/all"; // Import all.scss
@import "marvel-styleguide/assets"; // Import all assets
```

To do so you first need to `npm install eyeglass --save-dev`. The following example assumes you are using [node-sass](https://github.com/sass/node-sass) to do your compilation but you can [integrate with any sass compilation step](https://github.com/sass-eyeglass/eyeglass#building-sass-files-with-eyeglass-support).

Here is an example of how to integrate sass-eyeglass

```js
var Eyeglass = require('eyeglass'),
	sass = require('node-sass'),
	path = require('path');

// Your normal node-sass configuration
var sassOptions = options = {
	file: 'src/index.scss',
	outputStyle: 'compressed'
};

// This is where the magic happens
sassOptions.eyeglass = {
	engines: {
		sass: sass
	},
	root: rootDir,
	// The directory you want to copy assets into
	buildDir: 'dist',
	// The url-prefix to copy assets to, this also changes where they are
	// located. In this example they will be located in  'dist/assets'.
	assets:  {
		httpPrefix: 'assets',
	}
}

var eyeglass = new Eyeglass(options);
sass.render(eyeglass.options, function(err, result) {
	// Do whatever you normally do here
});
```

Given these settings assets from the module will be imported into `dist/assets` in your project and their urls will be written as `'/assets/something.png'`. There are many more ways you can configure this including having relative urls. See [sass-eyeglass working with assets](https://github.com/sass/node-sass) for more options.

## Maintaining this repo

### Release

Execute the `npm run build:css` command to compile the CSS.  
This should be done before all releases as some projects will just use the
compiled CSS for convenience.

### Deploying the site

First execute `npm run build:site`. To build the site.
Then execute `git subtree push --prefix dist/site origin gh-pages`.  

**Note:** There is no reason to make manual edits to the `gh-pages` branch.
