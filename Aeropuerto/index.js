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
    }

    console.log(`\n📝 Entrada: ${input}\n`);

    let inputStream = CharStreams.fromString(input);
    let lexer = new aeropuertoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new aeropuertoParser(tokenStream);
    let tree = parser.start();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\n❌ Se encontraron errores de sintaxis en la entrada.");
        console.error(`   Cantidad de errores: ${parser.syntaxErrorsCount}`);
    } 
    else {
        console.log("✅ Entrada válida.\n");
        
        // Mostrar árbol sintáctico
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log("🌳 Árbol de derivación:");
        console.log(cadena_tree);
        
        // Interpretar usando visitor
        const interpreter = new AeropuertoInterpreter();
        const resultado = interpreter.visit(tree);
        
        // Mostrar tabla de tokens (opcional)
        console.log("\n📋 Tabla de Tokens:");
        tokenStream.getTokens().forEach(token => {
            console.log(`   Token: ${token.text} → Tipo: ${lexer.symbolicNames[token.type]}`);
        });
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