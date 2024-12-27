# Como probar tu tokenizador

1. Colola tu modulo, con nombre `parser.f90`, que exporta la subrutina `parse`, en la misma carpeta donde está `test.f90`
2. Utiliza `make` para compilar los archivos
```bash
make
```

-o-

ejecuta los comandos por separado
```bash
gfortran -c parser.f90
gfortran -c test.f90
gfortran -o test test.o parser.o
```
3. Crea un archivo de texto con tu entrada
```bash
echo "texto de prueba" > input.txt
```
4. Ejecuta el programa, pasando el archivo de texto como argumento
```bash
./test input.txt
```