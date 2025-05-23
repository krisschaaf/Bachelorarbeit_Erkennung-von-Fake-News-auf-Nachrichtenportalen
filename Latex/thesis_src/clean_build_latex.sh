#!/bin/bash

.\clean_latex_aux.sh
pdflatex thesis.tex
bibtex thesis
pdflatex thesis.tex
pdflatex thesis.tex