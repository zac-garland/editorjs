dev_process <- function(){
  packer::bundle()
  devtools::document()
  devtools::install()
  devtools::load_all()
  editjs("test")
}
