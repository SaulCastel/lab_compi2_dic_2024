import * as Parser from './peg-parser';

export default function parseInput(input: string) {
    try {
        Parser.parse(input);
    } catch (e) {
        return e as string;
    }
    return 'Todo bien';
}
