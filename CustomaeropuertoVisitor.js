import aeropuertoVisitor from "./generated/aeropuertoVisitor.js";

export class AeropuertoInterpreter extends aeropuertoVisitor {
    
    visitStart(ctx) {
        console.log("\n=== INTERPRETANDO VUELO ===\n");
        return this.visit(ctx.vuelo());
    }

    visitVuelo(ctx) {
        const codigo = this.visit(ctx.codigo_vuelo());
        const origen = this.visit(ctx.aeropuerto(0));
        const destino = this.visit(ctx.aeropuerto(1));
        const hora = this.visit(ctx.hora());
        const estado = this.visit(ctx.estado());
        const puerta = this.visit(ctx.puerta());
        
        console.log(`✈️  Vuelo: ${codigo}`);
        console.log(`📍 Origen: ${origen}`);
        console.log(`📍 Destino: ${destino}`);
        console.log(`⏰ Hora: ${hora}`);
        console.log(`📌 Estado: ${estado}`);
        console.log(`🚪 Puerta: ${puerta}`);
        
        // Traducción a JavaScript
        const jsCode = `
// Vuelo ${codigo}
const vuelo = {
    codigo: "${codigo}",
    origen: "${origen}",
    destino: "${destino}",
    hora: "${hora}",
    estado: "${estado}",
    puerta: "${puerta}"
};
console.log("Vuelo cargado:", vuelo);
`;
        console.log("\n📜 Código JavaScript generado:\n" + jsCode);
        
        return { codigo, origen, destino, hora, estado, puerta };
    }

    visitCodigo_vuelo(ctx) {
        return ctx.getText();
    }

    visitAeropuerto(ctx) {
        return ctx.getText();
    }

    visitHora(ctx) {
        if (ctx.hora_num()) {
            return `${ctx.hora_num().getText()}:${ctx.minuto_num().getText()}`;
        }
        return ctx.getText(); // 'NOW'
    }

    visitEstado(ctx) {
        return ctx.getText();
    }

    visitPuerta(ctx) {
        return ctx.getText();
    }
}