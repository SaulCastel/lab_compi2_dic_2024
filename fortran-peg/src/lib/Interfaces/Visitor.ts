
// Auto-generated
import type Node from './Node';

export default interface Visitor<T> {

	visitIdentifier(node: Node): T
	visitRule(node: Node): T
	visitString(node: Node): T
	visitNumber(node: Node): T
}