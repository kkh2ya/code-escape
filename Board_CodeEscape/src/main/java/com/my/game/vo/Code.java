package com.my.game.vo;

public class Code {
	private int line;
	private String code;
	
	public Code() {}

	public Code(int line, String code) {
		super();
		this.line = line;
		this.code = code;
	}

	public int getLine() {
		return line;
	}

	public void setLine(int line) {
		this.line = line;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "Code [line=" + line + ", code=" + code + "]";
	}


	
	
}
