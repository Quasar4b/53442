import aeropuertoLexer from "./generated/aeropuertoLexer.js";
import aeropuertoParser from "./generated/aeropuertoParser.js";
import { AeropuertoInterpreter } from "./AeropuertoInterpreter.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    console.log(`\n📝 Entrada: ${input}\n`);

    let inputStream = CharStreams.fromString(input);
    let lexer = new aeropuertoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    
    // ========== TABLA DE LEXEMAS-TOKENS ==========
    console.log("📋 TABLA DE LEXEMAS-TOKENS");
    console.log("┌─────────────────────┬────────────────────────────────┐");
    console.log("│ Lexema              │ Token                          │");
    console.log("├─────────────────────┼────────────────────────────────┤");
    
    tokenStream.fill();
    const tokens = tokenStream.getTokens(0, tokenStream.size - 1);
    
    for (let token of tokens) {
        let lexema = token.text;
        if (lexema.length > 20) lexema = lexema.substring(0, 17) + "...";
        lexema = lexema.replace(/\n/g, '\\n').replace(/\t/g, '\\t');
        
        let tokenName = aeropuertoParser.symbolicNames[token.type] || "DESCONOCIDO";
        
        console.log(`│ ${lexema.padEnd(20)} │ ${tokenName.padEnd(30)} │`);
    }
    console.log("└─────────────────────┴────────────────────────────────┘");
    
    let parser = new aeropuertoParser(tokenStream);
    let tree = parser.start();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\n❌ Se encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\n✅ Entrada válida.\n");
        
        // ========== ÁRBOL DE DERIVACIÓN ==========
        console.log("🌳 ÁRBOL DE DERIVACIÓN:");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(cadena_tree);
        
        // ========== INTERPRETACIÓN ==========
        const interpreter = new AeropuertoInterpreter();
        interpreter.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese el vuelo: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();