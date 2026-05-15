grammar aeropuerto;

//-------PARSER-------
start : vuelo;
vuelo : codigo_vuelo aeropuerto GUION aeropuerto hora COMA estado COMA puerta;
codigo_vuelo : LETRA LETRA DIGITO DIGITO DIGITO;
aeropuerto : LETRA LETRA LETRA;
hora : (hora_num DOS_PUNTOS minuto_num) | 'NOW';
hora_num : DIGITO DIGITO;
minuto_num : DIGITO DIGITO;
estado : 'ON_TIME' | 'DELAYED' | 'CANCELLED';
asiento : LETRA DIGITO (DIGITO)*;
puerta : LETRA DIGITO (DIGITO)*;
terminal : DIGITO | LETRA;
//-------LEXER-------
COMA : ',';
GUION : '-';
DOS_PUNTOS : ':';
BARRA : '/';
LPAREN : '(';
RPAREN : ')';
LETRA : [a-zA-Z];
DIGITO : [0-9];
WS : [ \t\r\n]+ -> skip;