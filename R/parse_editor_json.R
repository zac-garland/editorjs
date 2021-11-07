#' parses json produced by editorjs
#'
#' @param out_json object passed to jsonlite::fromJSON
#' @param ... additional arguments passed to jsonlite::fromJSON
#' @export



parse_editor_json <- function(out_json,...){
  out <- jsonlite::fromJSON(out_json,...)

  out$blocks %>%
    dplyr::as_tibble() %>%
    tidyr::unnest(data)
}



