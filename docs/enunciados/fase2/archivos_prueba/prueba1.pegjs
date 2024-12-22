/* 
  batalla naval
*/

turno
  = "atacar" ":"? [ ] columna fila

columna
  = [a-j]i

fila
  = [0]?[1-9] / '10'