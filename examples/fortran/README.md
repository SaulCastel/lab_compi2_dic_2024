# Como probar tu tokenizador

1. Colola tu modulo, con nombre `tokenizer.f90`, que exporta la función nextSym(), en la misma carpeta donde está `parser.f90`
2. Utiliza `make` para compilar los archivos
```bash
make
```

-o-

ejecuta los comandos por separado
```bash
gfortran -c tokenizer.f90
gfortran -c parser.f90
gfortran -o parser parser.o tokenizer.o
```
3. Crea un archivo de texto con tu entrada
```bash
echo "texto de prueba" > test.txt
```
4. Ejecuta el programa, pasando el archivo de texto como argumento
```bash
./parser test.txt
```