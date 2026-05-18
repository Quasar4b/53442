# Analizador de vuelos - Legajo 53442
Juan Francisco Olivieri

----------------------------------------------------------------------------------------

# Qué hace este proyecto

Es un analizador que lee descripciones de tableros de datos y verifica si están bien escritas.  
Si la entrada es correcta, muestra:

- Una tabla con los tokens reconocidos
- El árbol de análisis sintáctico
- Una interpretación del tablero (fuentes, métricas, gráficos, filtros y alertas)
- Código JavaScript generado a partir de la definición del tablero

La gramática está definida con ANTLR4 y el programa corre en Node.js.

----------------------------------------------------------------------------------------
# Instalación

Clona este repositorio: git clone https://github.com/Quasar4b/53442

----------------------------------------------------------------------------------------
# Cómo ejecutar

node index.js (en la terminal)

ENTRADA VALIDA: AA123 JFK - LAX 15:30, DELAYED, B12

Código: 2 letras + 3 números
Origen y destino: 3 letras
Hora: HH:MM (00:00 a 23:59) o la palabra NOW
Estado: ON_TIME / DELAYED / CANCELLED
Puerta: letra + números
