package com.registro.service.exception;

public class ObjectNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public ObjectNotFoundException (String message) {
		super (message);
	}
	
	public ObjectNotFoundException (Exception exception) {
		super (exception);
	}
	
	public ObjectNotFoundException (String message, Exception exception) {
		super (message, exception);
	}
}
