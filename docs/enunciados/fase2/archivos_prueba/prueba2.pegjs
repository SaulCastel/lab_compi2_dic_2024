all "todas las reglas"
  = cadenas (_ clases)? (_ concatenacion)? (_ parentesis)? _ !.

_ "espacios en blanco"
  = [ \t\r\n]*

cadenas
  = "fizz"i
  / 'buzz'i
  / "foo"*
  / "bar"+
  / "baz"?

clases
  = [abc]
  / [t-v]
  / [ijklM-P@#$;]
  / [def]*
  / [qrs]+
  / [gh]?
  / ('cero_o_mas')*
  / ('una_o_mas')+
  / ('una_o_nada')?

concatenacion
  = "USAC" "-" "TRICENTENARIA"
  / [0]?[1-9]
  / ("x") ('y')

parentesis
  = "a" ("beja"/"migo")
  / [0-9]+ ("/" / "*" / "+" / "*") [0-9]+