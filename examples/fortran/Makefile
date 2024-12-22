.PHONY: clean

parser: parser.o tokenizer.o
	gfortran -o $@ $^

parser.o: parser.f90 tokenizer.o tokenizer.mod 
	gfortran -c $<

tokenizer.o tokenizer.mod: tokenizer.f90
	gfortran -c $<

clean:
	rm *.o *.mod