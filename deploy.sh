#!/bin/sh

npm run build

git commit -am "Save uncommitted changes (WIP)"
git branch --delete --force gh-pages
git checkout --orphan gh-pages
git add -f public/build
git commit -m "Rebuild GitHub pages"
git filter-branch -f --prune-empty --subdirectory-filter public && git push -f origin gh-pages && git checkout master

# based on https://stackoverflow.com/a/48591941