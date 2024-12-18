import * as Parser from './peg-parser';
import TokenizerVisitor from '$lib/FortranCompiler/Tokenizer';
import { Rule } from '$lib/CST';

export default function parseInput(input: string) {
    try {
        const grammar: Rule[] = Parser.parse(input);
        const tokenizer = new TokenizerVisitor();
        return tokenizer.generateTokenizer(grammar);
    } catch (e) {
        return e as string;
    }
}
