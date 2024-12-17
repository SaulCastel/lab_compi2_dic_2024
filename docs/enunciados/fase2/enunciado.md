# FortranPEG
## segunda fase
A partir del proyecto seleccionado en la fase 1, identificar, nombrar y sustituir los tipos de expresiones encontradas en la gramática de expresiones, esto con la finalidad de iniciar con la construcción del parser descendente recursivo en Fortran.

## Objetivo de la segunda fase
Construir una función llamada nextsym(), que actuará como tokenizador de nuestro futuro parser, dentro de un módulo Fortran llamado "parser.f90". El módulo será autogenerado a partir de una gramática reconocida por la 1ra fase del proyecto

## Descripción
### Fork de la anterior fase ganadora
Para trabajar la segunda fase, debe dirigirse al [repositorio del proyecto](https://github.com/ECYS-FIUSAC/fortranpeg) y realizar un fork de este.

### Reconocimiento de expresiones
Recibiendo una gramática PEG válida, deberá reconocer todas aquellas expresiones que representan tokens. Estas expresiones deben ser convertidas en parte de la función nextsym().
>[!IMPORTANT]
>El tokenizador debe implementar todas las expresiones que reconoce Peggy

#### Literales
```
"literal"
"literal"i
'literal'
'literal'i
```

Cadenas de texto que deben ser tomadas literalmente. Si llevan 'i' al final, deben ser case-insensitive.

#### Clases de caracteres
```
[abc0-9][?*+]?
[abc0-9]i[?*+]?
```

Clases de caracteres. Si llevan 'i' al final, deben ser case-insensitive. Pueden llevar cuantificadores.

### Modulo fortran generado
#### Nombre del token
Para cada expresión que puede representar un token:
- Usar el alias de la regla
- Si no hay alias, usar nombre de la regla
- Si es una literal, usar la cadena como nombre del token. Ej. ';', '+', 'foo', etc.
- Para reglas que tienen más de una expresión reconocida como token, dejar que cada expresión sea el nombre del token correspondiente

#### Retorno de la función nextsym()
La función nextsym() retorna el **lexema** correspondiente al token encontrado.

#### Ejemplo de modulo fortran generado
```fortran
module parser
	implicit none
	...

contains
...

function nextsym(input) result(token)
	character(len=*), intent(inout) :: input
	character(len=100), intent(out) :: token
	...
	// código generado para reconocer [0..9]+
	do while (i <= len(trim(input)))         
if (iachar(input_string(i:i)) >= iachar('0') .and. iachar(input_string(i:i)) <= 	iachar('9')) then             
is_digit = .true.             
token = trim(adjustl(token)) // input_string(i:i)
else if (is_digit) then
input = trim(adjustl(input(i:)))
has_token = .true.
return
end if
i = i + 1
end do
...
end function nextsym
...

end module parser
```

### Generación y descarga de módulo fortran
La pagina web debe generar un módulo fortran y mostrar un botón para descargar el modulo a la computadora.

## Archivos de entrada
En la calificación habrá dos tipos de archivo de entrada.
Uno tendrá una gramática PEG, el otro tendrá una cadena de texto reconocida por la gramática.

Por ejemplo, con la siguiente gramática:
```
// Simple Arithmetics Grammar
// ==========================
//
// Accepts expressions like "2 * (3 + 4)" and computes their value.

Expression
  = head:Term tail:(_ ("+" / "-") _ Term)*

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)*

Factor
  = "(" _ expr:Expression _ ")"
  / _ Integer

Integer "integer"
  = [0-9]+

_ "whitespace"
  = [ \t\n\r]*
```

Y la entrada de texto:
```
2 * (3 + 4)
```

La función nextsym() debe devolver los tokens en el siguiente orden:

|tipo       |lexema     |
|-----------|-----------|
|integer    |"2"        |
|whitespace |" "        |
|\*         |"\*"       |
|whitespace |" "        |
|(          |"("        |
|integer    |"3"        |
|whitespace |" "        |
|+          |"+"        |
|whitespace |" "        |
|integer    |"4"        |
|)          |")"        |
|EOF        |"EOF"      |

donde EOF es el token de fin de entrada

## Requirimientos
- Nombrar el el fork de la siguiente manera: G##_Fase2_FortranPEG, Ej. G03_Fase2_FortranPEG
- Trabajar sobre el proyecto existente en el repositorio de la ECYS, haciendo fork de este
- Todos los integrantes deben trabajar. Se revisaran commits en la calificación
- El modulo tiene que poder descargarse. No se permite mostrar el codigo fuente generado en la página web

## Entrega
- Link de su fork en UEDI

Fecha y hora máxima de entrega y commits: Jueves 19 de Diciembre, 18:30 horas