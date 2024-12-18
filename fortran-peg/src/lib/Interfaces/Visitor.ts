
// Auto-generated
import type Node from './Node';

export default interface Visitor<T> {

	visitRule(node: Node): T
	visitChoice(node: Node): T
	visitConcatenation(node: Node): T
	visitPluck(node: Node): T
	visitLabel(node: Node): T
	visitExpression(node: Node): T
	visitQuantifier(node: Node): T
	visitParsingExpression(node: Node): T
	visitGroup(node: Node): T
	visitString(node: Node): T
	visitRange(node: Node): T
	visitInputRange(node: Node): T
	visitIdentifier(node: Node): T
	visitNumber(node: Node): T
}