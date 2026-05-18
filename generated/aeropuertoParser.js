// Generated from aeropuerto.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import aeropuertoListener from './aeropuertoListener.js';
import aeropuertoVisitor from './aeropuertoVisitor.js';

const serializedATN = [4,1,13,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,3,4,50,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,5,8,
63,8,8,10,8,12,8,66,9,8,1,9,1,9,1,9,5,9,71,8,9,10,9,12,9,74,9,9,1,10,1,10,
1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,2,1,0,2,4,1,0,11,12,69,0,22,1,
0,0,0,2,24,1,0,0,0,4,34,1,0,0,0,6,40,1,0,0,0,8,49,1,0,0,0,10,51,1,0,0,0,
12,54,1,0,0,0,14,57,1,0,0,0,16,59,1,0,0,0,18,67,1,0,0,0,20,75,1,0,0,0,22,
23,3,2,1,0,23,1,1,0,0,0,24,25,3,4,2,0,25,26,3,6,3,0,26,27,5,6,0,0,27,28,
3,6,3,0,28,29,3,8,4,0,29,30,5,5,0,0,30,31,3,14,7,0,31,32,5,5,0,0,32,33,3,
18,9,0,33,3,1,0,0,0,34,35,5,11,0,0,35,36,5,11,0,0,36,37,5,12,0,0,37,38,5,
12,0,0,38,39,5,12,0,0,39,5,1,0,0,0,40,41,5,11,0,0,41,42,5,11,0,0,42,43,5,
11,0,0,43,7,1,0,0,0,44,45,3,10,5,0,45,46,5,7,0,0,46,47,3,12,6,0,47,50,1,
0,0,0,48,50,5,1,0,0,49,44,1,0,0,0,49,48,1,0,0,0,50,9,1,0,0,0,51,52,5,12,
0,0,52,53,5,12,0,0,53,11,1,0,0,0,54,55,5,12,0,0,55,56,5,12,0,0,56,13,1,0,
0,0,57,58,7,0,0,0,58,15,1,0,0,0,59,60,5,11,0,0,60,64,5,12,0,0,61,63,5,12,
0,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,17,1,0,0,
0,66,64,1,0,0,0,67,68,5,11,0,0,68,72,5,12,0,0,69,71,5,12,0,0,70,69,1,0,0,
0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,19,1,0,0,0,74,72,1,0,0,0,
75,76,7,1,0,0,76,21,1,0,0,0,3,49,64,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class aeropuertoParser extends antlr4.Parser {

    static grammarFileName = "aeropuerto.g4";
    static literalNames = [ null, "'NOW'", "'ON_TIME'", "'DELAYED'", "'CANCELLED'", 
                            "','", "'-'", "':'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "COMA", "GUION", 
                             "DOS_PUNTOS", "BARRA", "LPAREN", "RPAREN", 
                             "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "start", "vuelo", "codigo_vuelo", "aeropuerto", 
                         "hora", "hora_num", "minuto_num", "estado", "asiento", 
                         "puerta", "terminal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = aeropuertoParser.ruleNames;
        this.literalNames = aeropuertoParser.literalNames;
        this.symbolicNames = aeropuertoParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, aeropuertoParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.vuelo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, aeropuertoParser.RULE_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.codigo_vuelo();
	        this.state = 25;
	        this.aeropuerto();
	        this.state = 26;
	        this.match(aeropuertoParser.GUION);
	        this.state = 27;
	        this.aeropuerto();
	        this.state = 28;
	        this.hora();
	        this.state = 29;
	        this.match(aeropuertoParser.COMA);
	        this.state = 30;
	        this.estado();
	        this.state = 31;
	        this.match(aeropuertoParser.COMA);
	        this.state = 32;
	        this.puerta();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo_vuelo() {
	    let localctx = new Codigo_vueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, aeropuertoParser.RULE_codigo_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(aeropuertoParser.LETRA);
	        this.state = 35;
	        this.match(aeropuertoParser.LETRA);
	        this.state = 36;
	        this.match(aeropuertoParser.DIGITO);
	        this.state = 37;
	        this.match(aeropuertoParser.DIGITO);
	        this.state = 38;
	        this.match(aeropuertoParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto() {
	    let localctx = new AeropuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, aeropuertoParser.RULE_aeropuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(aeropuertoParser.LETRA);
	        this.state = 41;
	        this.match(aeropuertoParser.LETRA);
	        this.state = 42;
	        this.match(aeropuertoParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, aeropuertoParser.RULE_hora);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.hora_num();
	            this.state = 45;
	            this.match(aeropuertoParser.DOS_PUNTOS);
	            this.state = 46;
	            this.minuto_num();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.match(aeropuertoParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora_num() {
	    let localctx = new Hora_numContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, aeropuertoParser.RULE_hora_num);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(aeropuertoParser.DIGITO);
	        this.state = 52;
	        this.match(aeropuertoParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	minuto_num() {
	    let localctx = new Minuto_numContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, aeropuertoParser.RULE_minuto_num);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(aeropuertoParser.DIGITO);
	        this.state = 55;
	        this.match(aeropuertoParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, aeropuertoParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asiento() {
	    let localctx = new AsientoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, aeropuertoParser.RULE_asiento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(aeropuertoParser.LETRA);
	        this.state = 60;
	        this.match(aeropuertoParser.DIGITO);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 61;
	            this.match(aeropuertoParser.DIGITO);
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, aeropuertoParser.RULE_puerta);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(aeropuertoParser.LETRA);
	        this.state = 68;
	        this.match(aeropuertoParser.DIGITO);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 69;
	            this.match(aeropuertoParser.DIGITO);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminal() {
	    let localctx = new TerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, aeropuertoParser.RULE_terminal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

aeropuertoParser.EOF = antlr4.Token.EOF;
aeropuertoParser.T__0 = 1;
aeropuertoParser.T__1 = 2;
aeropuertoParser.T__2 = 3;
aeropuertoParser.T__3 = 4;
aeropuertoParser.COMA = 5;
aeropuertoParser.GUION = 6;
aeropuertoParser.DOS_PUNTOS = 7;
aeropuertoParser.BARRA = 8;
aeropuertoParser.LPAREN = 9;
aeropuertoParser.RPAREN = 10;
aeropuertoParser.LETRA = 11;
aeropuertoParser.DIGITO = 12;
aeropuertoParser.WS = 13;

aeropuertoParser.RULE_start = 0;
aeropuertoParser.RULE_vuelo = 1;
aeropuertoParser.RULE_codigo_vuelo = 2;
aeropuertoParser.RULE_aeropuerto = 3;
aeropuertoParser.RULE_hora = 4;
aeropuertoParser.RULE_hora_num = 5;
aeropuertoParser.RULE_minuto_num = 6;
aeropuertoParser.RULE_estado = 7;
aeropuertoParser.RULE_asiento = 8;
aeropuertoParser.RULE_puerta = 9;
aeropuertoParser.RULE_terminal = 10;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_start;
    }

	vuelo() {
	    return this.getTypedRuleContext(VueloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_vuelo;
    }

	codigo_vuelo() {
	    return this.getTypedRuleContext(Codigo_vueloContext,0);
	};

	aeropuerto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AeropuertoContext);
	    } else {
	        return this.getTypedRuleContext(AeropuertoContext,i);
	    }
	};

	GUION() {
	    return this.getToken(aeropuertoParser.GUION, 0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.COMA);
	    } else {
	        return this.getToken(aeropuertoParser.COMA, i);
	    }
	};


	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitVuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitVuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Codigo_vueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_codigo_vuelo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.LETRA);
	    } else {
	        return this.getToken(aeropuertoParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.DIGITO);
	    } else {
	        return this.getToken(aeropuertoParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterCodigo_vuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitCodigo_vuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitCodigo_vuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AeropuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_aeropuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.LETRA);
	    } else {
	        return this.getToken(aeropuertoParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterAeropuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitAeropuerto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitAeropuerto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_hora;
    }

	hora_num() {
	    return this.getTypedRuleContext(Hora_numContext,0);
	};

	DOS_PUNTOS() {
	    return this.getToken(aeropuertoParser.DOS_PUNTOS, 0);
	};

	minuto_num() {
	    return this.getTypedRuleContext(Minuto_numContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Hora_numContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_hora_num;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.DIGITO);
	    } else {
	        return this.getToken(aeropuertoParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterHora_num(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitHora_num(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitHora_num(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Minuto_numContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_minuto_num;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.DIGITO);
	    } else {
	        return this.getToken(aeropuertoParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterMinuto_num(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitMinuto_num(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitMinuto_num(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsientoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_asiento;
    }

	LETRA() {
	    return this.getToken(aeropuertoParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.DIGITO);
	    } else {
	        return this.getToken(aeropuertoParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterAsiento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitAsiento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitAsiento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(aeropuertoParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aeropuertoParser.DIGITO);
	    } else {
	        return this.getToken(aeropuertoParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitPuerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitPuerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aeropuertoParser.RULE_terminal;
    }

	DIGITO() {
	    return this.getToken(aeropuertoParser.DIGITO, 0);
	};

	LETRA() {
	    return this.getToken(aeropuertoParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.enterTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aeropuertoListener ) {
	        listener.exitTerminal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof aeropuertoVisitor ) {
	        return visitor.visitTerminal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




aeropuertoParser.StartContext = StartContext; 
aeropuertoParser.VueloContext = VueloContext; 
aeropuertoParser.Codigo_vueloContext = Codigo_vueloContext; 
aeropuertoParser.AeropuertoContext = AeropuertoContext; 
aeropuertoParser.HoraContext = HoraContext; 
aeropuertoParser.Hora_numContext = Hora_numContext; 
aeropuertoParser.Minuto_numContext = Minuto_numContext; 
aeropuertoParser.EstadoContext = EstadoContext; 
aeropuertoParser.AsientoContext = AsientoContext; 
aeropuertoParser.PuertaContext = PuertaContext; 
aeropuertoParser.TerminalContext = TerminalContext; 
