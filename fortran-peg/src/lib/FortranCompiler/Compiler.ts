import type Node from '$lib/Interfaces/Node';
import type Visitor from '$lib/Interfaces/Visitor';

export default class FortranCompiler implements Visitor<string> {
    visitIdentifier(node: Node): string {}
    visitRule(node: Node): string {}
    visitString(node: Node): string {}
}
