inicio
  = primero:numero lista:(espacios ("+" / "-" ) espacios @numero)+ {
    return lista.reduce((suma, actual) => suma + actual, primero)
  }

numero
  = [0-9]+ {
    return Number(text())
    }

espacios = [ \t\n\r]*