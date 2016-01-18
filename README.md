# Marvelapp styleguide

Base styling for Marvelapp projects.  
See [marvelapp.github.io/styleguide/](http://marvelapp.github.io/styleguide/) for documentation and usage.

## Maintaining this repo

### Release

Execute the `npm run build:css` command to compile the CSS.  
This should be done before all releases as some projects will just use the
compiled CSS for convenience.

### Deploying the site

First execute `npm run build:site`. To build the site.
Then execute `git subtree push --prefix dist/site origin gh-pages`.  

**Note:** There is no reason to make manual edits to the `gh-pages` branch.
