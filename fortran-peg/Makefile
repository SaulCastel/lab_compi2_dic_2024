libPath = src/lib

${libPath}/parser/peg-parser.js: grammar/peg.pegjs ${libPath}/CST.ts
	npx peggy --format es -o $@ $<

${libPath}/CST.ts: tools/Nodes.js
	node tools/Generator.js