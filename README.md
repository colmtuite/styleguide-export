# Marvel styleguide

Base styling for Marvelapp projects.  
See [marvelapp.github.io/styleguide/](http://marvelapp.github.io/styleguide/) for documentation and usage.

## Importing marvel styleguide into your projects

Add to your `package.json` dependencies like so:

```json
{
	"dependencies": {
		"marvel-styleguide": "https://github.com/marvelapp/styleguide"
	}
}
```
Then run `npm install`.

*PROTIP: You can add a `#version` to the end to get a specific version
`"https://github.com/marvelapp/styleguide#1.1.12"` would pull version `1.1.12`.*

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

var eyeglass = new Eyeglass(sassOptions);
sass.render(eyeglass.options, function(err, result) {
	// Do whatever you normally do here
});
```

Given these settings assets from the module will be imported into `dist/assets` in your project and their urls will be written as `'/assets/something.png'`. There are many more ways you can configure this including having relative urls. See [sass-eyeglass working with assets](https://github.com/sass/node-sass) for more options.

## Installing for development

Clone the repository then `npm install`.

## Maintaining this repo

### Development

`npm start` command will start a development server on port 9000 (configurable via the `--port, -p` option, e.g., `npm start -- --port 6969`).

Open `http://localhost:8080` in your browser to preview it. Changes will be automatically reloaded.

### Release

Execute the `npm run build` command to compile the CSS and documentation site.  
This should be done before all releases.
