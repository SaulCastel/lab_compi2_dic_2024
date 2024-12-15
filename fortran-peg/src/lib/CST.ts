
// Auto-generated
import type Node from './Interfaces/Node';
import type Visitor from './Interfaces/Visitor';

export class Identifier implements Node {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitIdentifier(this);
    }
}
    
export class Rule implements Node {
    id: string;
	alias: string;
	expression: Node;

    constructor(id: string, alias: string, expression: Node) {
        this.id = id;
		this.alias = alias;
		this.expression = expression;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitRule(this);
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
    
export class Number implements Node {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visitNumber(this);
    }
}
    