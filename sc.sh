#!/bin/bash	
for folder in ./*
do 
	for name in ./$folder/*.html
	do 
		mv ./$folder/*.html ./$folder/index.html
	done
done
