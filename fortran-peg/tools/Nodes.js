const nodes = {
    Rule: {
        id: 'string',
        expression: 'Choice',
        alias: '?string',
    },
    Choice: {
        expressions: 'Concatenation[]',
    },
    Concatenation: {
        expressions: 'Pluck[]',
    },
    Pluck: {
        expression: 'Label',
        pluck: '?boolean',
    },
    Label: {
        expression: 'Expression',
        identifier: '?string',
    },
    Expression: {
        expression: 'ParsingExpression',
        quantifier: '?Quantifier',
        text: '?boolean',
    },
    Quantifier: {
        value: 'string',
    },
    ParsingExpression: {
        expression: 'Node',
    },
    Group: {
        expression: 'Choice',
    },
    String: {
        value: 'string',
    },
    Range: {
        characters: 'InputRange[]',
    },
    InputRange: {
        value: 'string',
    },
    Identifier: {
        value: 'string',
    },
    Number: {
        value: 'string',
    },
};

export default nodes;
