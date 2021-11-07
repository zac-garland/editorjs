library(tidyverse)

dev_process <- function(){
  packer::bundle()
  devtools::document()
  devtools::install()
  devtools::load_all()
  editjs("test")
}


packer::scaffold_widget("editjs")



c("@editorjs/editorjs","@editorjs/header@latest", "@editorjs/simple-image@latest",
  "@editorjs/delimiter@latest", "@editorjs/list@latest", "@editorjs/checklist@latest",
  "@editorjs/quote@latest", "@editorjs/code@latest", "@editorjs/embed@latest",
  "@editorjs/table@latest", "@editorjs/link@latest", "@editorjs/warning@latest",
  "@editorjs/marker@latest", "@editorjs/inline-code@latest") %>%
  map(~{
    packer::npm_install(.x,scope = "prod")
  })







