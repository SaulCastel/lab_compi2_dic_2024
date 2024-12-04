---
author: Saul C.
date: Diciembre 04, 2024
---

# PEGs (Parsing Expression Grammars) y PeggyJS
Laboratorio Organización de lenguajes y compiladores 2

---
## ¿Qué es una **PEG**?
Una *Parsing Expression Grammar* es un tipo de gramatica para describir lenguajes formales, pensado especialmente para la generación de parsers descendentes.

Según [wikipedia](https://en.wikipedia.org/wiki/Parsing_expression_grammar):
> A parsing expression grammar is a collection of named parsing expressions, which may reference each other. 
> A parsing expression is a kind of pattern that each string may either match or not match.

### En resumen
- Una gramática de *expresiones de parseo* es un conjunto de *expresiones de parseo* nombradas
- parecido a las expresiones regulares, una *expresión de parseo* se utiliza para capturar una cadena de texto que haga match con su definición/patrón
- Las *expresiones de parseo* tienen similitudes con las expresiones regulares, pero no son lo mismo

---
## ¿Qué es PeggyJS?
Es un generador de parsers para *Parsing Expression Grammars*
- Genera modulos Javascript (CommonJs o Ecmascript)
- Puede importarse como script en HTML, o usarse como un paquete de Node
- Puede encontrarse en [este link](https://peggyjs.org/)

### Instalar
```bash
npm init -y
npm install -D peggy
```

---
## Tipos de reglas en Peggy
Podemos encontrar las reglas disponibles en Peggy a través de [este link](https://peggyjs.org/documentation.html#grammar-syntax-and-semantics-parsing-expression-types)

### Ejemplo de gramática en Peggy
```js
start
  = additive

additive
  = left:multiplicative "+" right:additive { return left + right; }
  / multiplicative

multiplicative
  = left:primary "*" right:multiplicative { return left * right; }
  / primary

primary
  = integer
  / "(" additive:additive ")" { return additive; }

integer "simple number"
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }
```
