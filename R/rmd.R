parse_rmd <- function(rmd){
	if(rmd == "")
		return()

	# vectorize for loop
	lines <- strsplit(rmd, split = "\n")[[1]]
	lines <- lines[lines != ""]

	# lexer
	lapply(lines, function(line) {
		first_token <- strsplit(line, " ")[[1]][1]

		switch(
			first_token,
			"#" = make_header(line, level = 1),
			"##" = make_header(line, level = 2),
			"###" = make_header(line, level = 3),
			make_paragraph(line)
		)
	})
}

make_header <- function(line, level) {
	list(
		type = "header",
		data = list(
			text = gsub("#", "", line) %>% trimws(),
			level = level
		)
	)
}

make_paragraph <- function(line){
	list(
		type = "paragraph",
		data = list(
			text = line
		)
	)
}
