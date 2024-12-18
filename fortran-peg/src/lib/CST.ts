// Auto-generated
import type Node from './Interfaces/Node';
import type Visitor from './Interfaces/Visitor';

export class Rule implements Node {
    id: string;
    expression: Choice;
    alias?: string;

    constructor(id: string, expression: Choice, alias?: string) {
        this.id = id;
        this.expression = expression;
        this.alias = alias;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitRule(this);
    }
}

export class Choice implements Node {
    expressions: Concatenation[];

    constructor(expressions: Concatenation[]) {
        this.expressions = expressions;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitChoice(this);
    }
}

export class Concatenation implements Node {
    expressions: Pluck[];

    constructor(expressions: Pluck[]) {
        this.expressions = expressions;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitConcatenation(this);
    }
}

export class Pluck implements Node {
    expression: Label;
    pluck?: boolean;

    constructor(expression: Label, pluck?: boolean) {
        this.expression = expression;
        this.pluck = pluck;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitPluck(this);
    }
}

export class Label implements Node {
    expression: Expression;
    identifier?: string;

    constructor(expression: Expression, identifier?: string) {
        this.expression = expression;
        this.identifier = identifier;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitLabel(this);
    }
}

export class Expression implements Node {
    expression: ParsingExpression;
    quantifier?: Quantifier;
    text?: boolean;

    constructor(
        expression: ParsingExpression,
        quantifier?: Quantifier,
        text?: boolean
    ) {
        this.expression = expression;
        this.quantifier = quantifier;
        this.text = text;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitExpression(this);
    }
}

export class Quantifier implements Node {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitQuantifier(this);
    }
}

export class ParsingExpression implements Node {
    expression: Node;

    constructor(expression: Node) {
        this.expression = expression;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitParsingExpression(this);
    }
}

export class Group implements Node {
    expression: Choice;

    constructor(expression: Choice) {
        this.expression = expression;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitGroup(this);
    }
}

export class String implements Node {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitString(this);
    }
}

export class Range implements Node {
    characters: InputRange[];

    constructor(characters: InputRange[]) {
        this.characters = characters;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitRange(this);
    }
}

export class InputRange implements Node {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitInputRange(this);
    }
}

export class Identifier implements Node {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitIdentifier(this);
    }
}

export class Number implements Node {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitNumber(this);
    }
}
