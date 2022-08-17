package com.todo.pd.todo.exceptions;

public class CardNotFoundException extends RuntimeException {
    public CardNotFoundException(String message, Throwable err) {
        super(message, err);
    }

    public CardNotFoundException(String message) {
        super(message);
    }
}
