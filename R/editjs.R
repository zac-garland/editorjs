#' editjs instance
#'
#' html widget for provoking editor instance
#'
#' @import htmlwidgets
#' @import htmltools
#'
#' @export
editjs <- function(rmd = "", width = "100%", height = "100%", elementId = NULL) {
  blocks <- parse_rmd(rmd)

  x <- list(
    opts = list(
      readOnly = TRUE,
      data = list(
        blocks = blocks
      )
    )
  )

  # create widget
  htmlwidgets::createWidget(
    name = "editjs",
    x,
    width = width,
    height = height,
    package = "editorjs",
    elementId = elementId
  )
}




#' Shiny bindings for editjs
#'
#' Output and render functions for using editjs within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a editjs
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name editjs-shiny
#'
#' @export
editjsOutput <- function(outputId, width = "100%", height = "400px") {
  htmlwidgets::shinyWidgetOutput(outputId, "editjs", width, height, package = "editorjs")
}

#' @rdname editjs-shiny
#' @export
renderEditjs <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) {
    expr <- substitute(expr)
  } # force quoted
  htmlwidgets::shinyRenderWidget(expr, editjsOutput, env, quoted = TRUE)
}
