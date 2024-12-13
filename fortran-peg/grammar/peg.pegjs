grammar
  = rule+ _

rule
  = _ identifier _ string? _ "=" _ choice (_ ";")?
  
choice
  = concatenation (_ "/" _ concatenation)*

concatenation
  = pluck (_ pluck !(_ string? _ "="))*

pluck
  = "@"? _ label

label
  = (identifier _ ":")? _ expression

expression
  = "$"? _ parsingExpression _ quantifier?

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

_ "Espacios en blanco"
  = [ \t\n\r]*

number
  = [0-9]+