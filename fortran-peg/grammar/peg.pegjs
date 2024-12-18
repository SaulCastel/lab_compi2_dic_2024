{{
import * as n from '../CST';
}}

grammar
  = @rule+ _

rule
  = _ id:identifier _ alias:string? _ "=" _ expr:choice (_ ";")? {
    return new n.Rule(id, expr, alias);
  }
  
choice
  = head:concatenation tail:(_ "/" _ @concatenation)* {
    return new n.Choice([head, ...tail]);
  }

concatenation
  = head:pluck tail:(_ @pluck !(_ string? _ "="))* {
    return new n.Concatenation([head, ...tail]);
  }

pluck
  = pluck:"@"? _ expr:label {
    return new n.Pluck(expr, pluck ? true : false);
  }

label
  = label:(@identifier _ ":")? _ expr:expression {
    return new n.Label(expr, label);
  }

expression
  = text:"$"? _ expr:parsingExpression _ qty:quantifier? {
    return new n.Expression(expr, qty, text)
  }

quantifier
  = val:[?+*] {
    return new n.Quantifier(val); 
  }
  / val:$("|" _ (number / identifier) _ "|") {
    return new n.Quantifier(val); 
  }
  / val:$("|" _ (number / identifier)? _ ".." _ (number / identifier)? _ "|") {
    return new n.Quantifier(val); 
  }
  / val:$("|" _ (number / identifier)? _ "," _ choice _ "|") {
    return new n.Quantifier(val); 
  }
  / val:$("|" _ (number / identifier)? _ ".." _ (number / identifier)? _ "," _ choice _ "|") {
    return new n.Quantifier(val); 
  }

parsingExpression
  = expr:identifier {
    return new n.ParsingExpression(expr);
  }
  / expr:string "i"? {
    return new n.ParsingExpression(expr);
  }
  / expr:range "i"? {
    return new n.ParsingExpression(expr);
  }
  / expr:group {
    return new n.ParsingExpression(expr);
  }

group
  = "(" _ expr:choice _ ")" {
    return new n.Group(expr);
  }

string
	= ["] val:$[^"]* ["] {
    return new n.String(val);
  }
  / ['] val:$[^']* ['] {
    return new n.String(val);
  }
    
range
  = "[" val:input_range+ "]" {
    return new n.Range(val);
  }

input_range = val:$([^[\]-] "-" [^[\]-]) {
    return new n.InputRange(val);
  }
  / val:$([^[\]]+) {
    return new n.InputRange(val);
  }

identifier "identificador"
  = id:$([_a-z]i[_a-z0-9]i*) {
    return new n.Identifier(id);
  }

_ "Espacios en blanco"
  = [ \t\n\r]*

number
  = val:$([0-9]+) {
    return new n.Number(val);
  }