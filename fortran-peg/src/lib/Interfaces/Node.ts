import type Visitor from './Visitor';

export default interface Node {
    accept<T>(visitor: Visitor<T>): T;
}
