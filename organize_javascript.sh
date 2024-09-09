#!/bin/bash

rm exists.txt
ls | grep -v -e "README.md" -e "LICENSE" -e "organize_htmlecss.sh" -e "exists.txt" > exists.txt
printf "# HTMLeCSS\n" > README.md
while read name
do
	printf "<a href='https://gabrielryanft.github.io/htmlecss/$name/index.html' target='_blank' rel='next'>$name</a><br/>\n" >> README.md

done < exists.txt
