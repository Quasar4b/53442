// Generated from c:/Users/olivi/Aeropuerto/aeropuerto.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class aeropuertoParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, COMA=5, GUION=6, DOS_PUNTOS=7, BARRA=8, 
		LPAREN=9, RPAREN=10, LETRA=11, DIGITO=12, WS=13;
	public static final int
		RULE_start = 0, RULE_vuelo = 1, RULE_codigo_vuelo = 2, RULE_aeropuerto = 3, 
		RULE_hora = 4, RULE_hora_num = 5, RULE_minuto_num = 6, RULE_estado = 7, 
		RULE_asiento = 8, RULE_puerta = 9, RULE_terminal = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "vuelo", "codigo_vuelo", "aeropuerto", "hora", "hora_num", "minuto_num", 
			"estado", "asiento", "puerta", "terminal"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'NOW'", "'ON_TIME'", "'DELAYED'", "'CANCELLED'", "','", "'-'", 
			"':'", "'/'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "COMA", "GUION", "DOS_PUNTOS", "BARRA", 
			"LPAREN", "RPAREN", "LETRA", "DIGITO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "aeropuerto.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public aeropuertoParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public VueloContext vuelo() {
			return getRuleContext(VueloContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			vuelo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VueloContext extends ParserRuleContext {
		public Codigo_vueloContext codigo_vuelo() {
			return getRuleContext(Codigo_vueloContext.class,0);
		}
		public List<AeropuertoContext> aeropuerto() {
			return getRuleContexts(AeropuertoContext.class);
		}
		public AeropuertoContext aeropuerto(int i) {
			return getRuleContext(AeropuertoContext.class,i);
		}
		public TerminalNode GUION() { return getToken(aeropuertoParser.GUION, 0); }
		public HoraContext hora() {
			return getRuleContext(HoraContext.class,0);
		}
		public List<TerminalNode> COMA() { return getTokens(aeropuertoParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(aeropuertoParser.COMA, i);
		}
		public EstadoContext estado() {
			return getRuleContext(EstadoContext.class,0);
		}
		public PuertaContext puerta() {
			return getRuleContext(PuertaContext.class,0);
		}
		public VueloContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vuelo; }
	}

	public final VueloContext vuelo() throws RecognitionException {
		VueloContext _localctx = new VueloContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_vuelo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			codigo_vuelo();
			setState(25);
			aeropuerto();
			setState(26);
			match(GUION);
			setState(27);
			aeropuerto();
			setState(28);
			hora();
			setState(29);
			match(COMA);
			setState(30);
			estado();
			setState(31);
			match(COMA);
			setState(32);
			puerta();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Codigo_vueloContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(aeropuertoParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(aeropuertoParser.LETRA, i);
		}
		public List<TerminalNode> DIGITO() { return getTokens(aeropuertoParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(aeropuertoParser.DIGITO, i);
		}
		public Codigo_vueloContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codigo_vuelo; }
	}

	public final Codigo_vueloContext codigo_vuelo() throws RecognitionException {
		Codigo_vueloContext _localctx = new Codigo_vueloContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_codigo_vuelo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(LETRA);
			setState(35);
			match(LETRA);
			setState(36);
			match(DIGITO);
			setState(37);
			match(DIGITO);
			setState(38);
			match(DIGITO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AeropuertoContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(aeropuertoParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(aeropuertoParser.LETRA, i);
		}
		public AeropuertoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aeropuerto; }
	}

	public final AeropuertoContext aeropuerto() throws RecognitionException {
		AeropuertoContext _localctx = new AeropuertoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_aeropuerto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(LETRA);
			setState(41);
			match(LETRA);
			setState(42);
			match(LETRA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HoraContext extends ParserRuleContext {
		public Hora_numContext hora_num() {
			return getRuleContext(Hora_numContext.class,0);
		}
		public TerminalNode DOS_PUNTOS() { return getToken(aeropuertoParser.DOS_PUNTOS, 0); }
		public Minuto_numContext minuto_num() {
			return getRuleContext(Minuto_numContext.class,0);
		}
		public HoraContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hora; }
	}

	public final HoraContext hora() throws RecognitionException {
		HoraContext _localctx = new HoraContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_hora);
		try {
			setState(49);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIGITO:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(44);
				hora_num();
				setState(45);
				match(DOS_PUNTOS);
				setState(46);
				minuto_num();
				}
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				match(T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Hora_numContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(aeropuertoParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(aeropuertoParser.DIGITO, i);
		}
		public Hora_numContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hora_num; }
	}

	public final Hora_numContext hora_num() throws RecognitionException {
		Hora_numContext _localctx = new Hora_numContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_hora_num);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(DIGITO);
			setState(52);
			match(DIGITO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Minuto_numContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(aeropuertoParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(aeropuertoParser.DIGITO, i);
		}
		public Minuto_numContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minuto_num; }
	}

	public final Minuto_numContext minuto_num() throws RecognitionException {
		Minuto_numContext _localctx = new Minuto_numContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_minuto_num);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(DIGITO);
			setState(55);
			match(DIGITO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EstadoContext extends ParserRuleContext {
		public EstadoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_estado; }
	}

	public final EstadoContext estado() throws RecognitionException {
		EstadoContext _localctx = new EstadoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_estado);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsientoContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(aeropuertoParser.LETRA, 0); }
		public List<TerminalNode> DIGITO() { return getTokens(aeropuertoParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(aeropuertoParser.DIGITO, i);
		}
		public AsientoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asiento; }
	}

	public final AsientoContext asiento() throws RecognitionException {
		AsientoContext _localctx = new AsientoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_asiento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(LETRA);
			setState(60);
			match(DIGITO);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DIGITO) {
				{
				{
				setState(61);
				match(DIGITO);
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PuertaContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(aeropuertoParser.LETRA, 0); }
		public List<TerminalNode> DIGITO() { return getTokens(aeropuertoParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(aeropuertoParser.DIGITO, i);
		}
		public PuertaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_puerta; }
	}

	public final PuertaContext puerta() throws RecognitionException {
		PuertaContext _localctx = new PuertaContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_puerta);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(LETRA);
			setState(68);
			match(DIGITO);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DIGITO) {
				{
				{
				setState(69);
				match(DIGITO);
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminalContext extends ParserRuleContext {
		public TerminalNode DIGITO() { return getToken(aeropuertoParser.DIGITO, 0); }
		public TerminalNode LETRA() { return getToken(aeropuertoParser.LETRA, 0); }
		public TerminalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terminal; }
	}

	public final TerminalContext terminal() throws RecognitionException {
		TerminalContext _localctx = new TerminalContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_terminal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_la = _input.LA(1);
			if ( !(_la==LETRA || _la==DIGITO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\rN\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u00042\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0005\b?\b\b\n\b\f\bB\t\b\u0001\t\u0001\t\u0001\t\u0005\tG\b"+
		"\t\n\t\f\tJ\t\t\u0001\n\u0001\n\u0001\n\u0000\u0000\u000b\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0000\u0002\u0001\u0000\u0002"+
		"\u0004\u0001\u0000\u000b\fE\u0000\u0016\u0001\u0000\u0000\u0000\u0002"+
		"\u0018\u0001\u0000\u0000\u0000\u0004\"\u0001\u0000\u0000\u0000\u0006("+
		"\u0001\u0000\u0000\u0000\b1\u0001\u0000\u0000\u0000\n3\u0001\u0000\u0000"+
		"\u0000\f6\u0001\u0000\u0000\u0000\u000e9\u0001\u0000\u0000\u0000\u0010"+
		";\u0001\u0000\u0000\u0000\u0012C\u0001\u0000\u0000\u0000\u0014K\u0001"+
		"\u0000\u0000\u0000\u0016\u0017\u0003\u0002\u0001\u0000\u0017\u0001\u0001"+
		"\u0000\u0000\u0000\u0018\u0019\u0003\u0004\u0002\u0000\u0019\u001a\u0003"+
		"\u0006\u0003\u0000\u001a\u001b\u0005\u0006\u0000\u0000\u001b\u001c\u0003"+
		"\u0006\u0003\u0000\u001c\u001d\u0003\b\u0004\u0000\u001d\u001e\u0005\u0005"+
		"\u0000\u0000\u001e\u001f\u0003\u000e\u0007\u0000\u001f \u0005\u0005\u0000"+
		"\u0000 !\u0003\u0012\t\u0000!\u0003\u0001\u0000\u0000\u0000\"#\u0005\u000b"+
		"\u0000\u0000#$\u0005\u000b\u0000\u0000$%\u0005\f\u0000\u0000%&\u0005\f"+
		"\u0000\u0000&\'\u0005\f\u0000\u0000\'\u0005\u0001\u0000\u0000\u0000()"+
		"\u0005\u000b\u0000\u0000)*\u0005\u000b\u0000\u0000*+\u0005\u000b\u0000"+
		"\u0000+\u0007\u0001\u0000\u0000\u0000,-\u0003\n\u0005\u0000-.\u0005\u0007"+
		"\u0000\u0000./\u0003\f\u0006\u0000/2\u0001\u0000\u0000\u000002\u0005\u0001"+
		"\u0000\u00001,\u0001\u0000\u0000\u000010\u0001\u0000\u0000\u00002\t\u0001"+
		"\u0000\u0000\u000034\u0005\f\u0000\u000045\u0005\f\u0000\u00005\u000b"+
		"\u0001\u0000\u0000\u000067\u0005\f\u0000\u000078\u0005\f\u0000\u00008"+
		"\r\u0001\u0000\u0000\u00009:\u0007\u0000\u0000\u0000:\u000f\u0001\u0000"+
		"\u0000\u0000;<\u0005\u000b\u0000\u0000<@\u0005\f\u0000\u0000=?\u0005\f"+
		"\u0000\u0000>=\u0001\u0000\u0000\u0000?B\u0001\u0000\u0000\u0000@>\u0001"+
		"\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000A\u0011\u0001\u0000\u0000"+
		"\u0000B@\u0001\u0000\u0000\u0000CD\u0005\u000b\u0000\u0000DH\u0005\f\u0000"+
		"\u0000EG\u0005\f\u0000\u0000FE\u0001\u0000\u0000\u0000GJ\u0001\u0000\u0000"+
		"\u0000HF\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000I\u0013\u0001"+
		"\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000KL\u0007\u0001\u0000\u0000"+
		"L\u0015\u0001\u0000\u0000\u0000\u00031@H";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}