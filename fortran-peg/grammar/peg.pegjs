grammar
  = rule (_ rule)*

rule
  = name _ "=" _ choice _ ";"

choice
  = contatenation (_ "/" _ contatenation)+
  / contatenation

contatenation
  = expression (_ expression)+
  / expression

expression
  = set
  / name

set
  = "[" characters+ "]"

characters
  = validChar / range / escapeCodes

escapeCodes
  = [\][tnr]

range
  = bottom:validChar "-" top:validChar &{return bottom < top}

validChar
  = [a-z0-9]i

name
  = [_a-z][_a-z0-9]i*

_ "whitespace"
  = [ \t\n\r]*