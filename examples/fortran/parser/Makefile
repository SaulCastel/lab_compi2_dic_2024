.PHONY: clean

test: test.o parser.o
	gfortran -o $@ $^

test.o: test.f90 parser.o parser.mod 
	gfortran -c $<

parser.o parser.mod: parser.f90
	gfortran -c $<

clean:
	rm *.o *.mod