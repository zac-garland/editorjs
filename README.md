
<!-- README.md is generated from README.Rmd. Please edit that file -->

# editorjs

<img src='man/figures/logo.svg' align="right" height="139" />

A simple R wrapper of the [editorjs](https://editorjs.io/) editor.

Plan:

  - shiny demo app to go from editjs -\> distill rmarkdown -\> github
    actions deploy site

## Installation

You can install the development version from
[GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("zac-garland/editorjs")
```

## New Editor

``` r
library(editorjs)

editjs()
```

`TODO`

  - [ ] write\_distill\_article
  - [ ] parse\_json
  - [ ] reclass id’s for multiple instances
  - [ ] shiny app to rmd
  - [ ] resize event htmlwidgets
  - [ ] add tags `distill` module
  - [ ] lightswitch dark / light theme
