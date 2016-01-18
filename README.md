# Marvelapp styleguide

Base styling for Marvelapp projects.  
See [marvelapp.github.io/styleguide/](http://marvelapp.github.io/styleguide/) for documentation and usage.

## Maintaining this repo

### Release

Execute the `npm run build` command to compile the CSS.  
This should be done before all releases as some projects will just use the
compiled CSS for convenience and it also updates the CSS for the demo site.

### Deploying the site

First make sure you run `npm run build` to generate the CSS.  

On the master branch run `git subtree push --prefix site origin gh-pages`.  
**Note:** There is no reason to make manual edits to the `gh-pages` branch.
