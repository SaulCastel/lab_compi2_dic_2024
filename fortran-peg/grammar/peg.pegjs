grammar
  = rule+ nl

rule
  = nl identifier nl string? nl "=" _ choice nl (_";"_)?
  
choice
  = concatenation (nl "/" nl concatenation)*

concatenation
  = pluck (_ pluck)*

pluck
  = "@"? label

label
  = (identifier ":")? expression

expression
  = "$"? parsingExpression quantifier?

quantifier
  = [?+*]
  / "|" _ (number / identifier) _ "|"
  / "|" _ (number / identifier)? _ ".." _ (number / identifier)? _ "|"
  / "|" _ (number / identifier)? _ "," _ choice _ "|"
  / "|" _ (number / identifier)? _ ".." _ (number / identifier)? _ "," _ choice _ "|"

parsingExpression
  = identifier
  / string "i"?
  / range "i"?
  / group

group
  = "(" _ choice _ ")"

string
	= ["] [^"]* ["]
    / ['] [^']* [']
    
range = "[" input_range+ "]"

input_range = [^[\]-] "-" [^[\]-]
			/ [^[\]]+

identifier "identificador"
  = [_a-z]i[_a-z0-9]i*

_ "espacios en blanco"
  = [ \t]*

nl "nueva linea"
  = [ \t\n\r]*

number
  = [0-9]+