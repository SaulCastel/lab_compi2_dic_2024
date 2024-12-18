import type Node from '$lib/Interfaces/Node';
import type Visitor from '$lib/Interfaces/Visitor';
import * as n from '$lib/CST';
import mustache from 'mustache';

export default class TokenizerVisitor implements Visitor<string> {
    generateTokenizer(grammar: n.Rule[]) {
        const template = `
module tokenizer
    implicit none

    contains
    function nextSym(input, cursor) result(lexeme)
        character(len=*), intent(in) :: input
        integer, intent(inout) :: cursor
        character(len=:), allocatable :: lexeme
        {{#rules}}
        {{.}}
        {{/rules}}
        print *, "error lexico en col ", cursor, ', "'//input(cursor:cursor)//'"'
    end function nextSym
end module tokenizer
        `;

        return mustache.render(template, {
            rules: grammar.map((rule) => rule.accept(this)),
        });
    }

    visitRule(node: n.Rule): string {
        return node.expression.accept(this);
    }
    visitChoice(node: n.Choice): string {
        return node.expressions.map((expr) => expr.accept(this)).join('\n');
    }
    visitConcatenation(node: n.Concatenation): string {
        return node.expressions.map((expr) => expr.accept(this)).join('\n');
    }
    visitPluck(node: n.Pluck): string {
        return node.expression.accept(this);
    }
    visitLabel(node: n.Label): string {
        return node.expression.accept(this);
    }
    visitExpression(node: n.Expression): string {
        return node.expression.accept(this);
    }
    visitParsingExpression(node: n.ParsingExpression): string {
        return node.expression.accept(this);
    }
    visitQuantifier(node: Node): string {
        throw new Error('Method not implemented.');
    }
    visitGroup(node: Node): string {
        throw new Error('Method not implemented.');
    }
    visitString(node: n.String): string {
        const template = `
        if ( "{{val}}" == input(cursor:cursor + {{offset}} )) then
            allocate( character(len={{length}}) :: lexeme)
            lexeme = input(cursor:cursor + {{offset}})
            cursor = cursor + {{length}}
            return
        end if
        `;

        return mustache.render(template, {
            val: node.value,
            offset: node.value.length - 1,
            length: node.value.length,
        });
    }
    visitRange(node: Node): string {
        throw new Error('Method not implemented.');
    }
    visitInputRange(node: Node): string {
        throw new Error('Method not implemented.');
    }
    visitIdentifier(node: Node): string {
        throw new Error('Method not implemented.');
    }
    visitNumber(node: Node): string {
        throw new Error('Method not implemented.');
    }
}
