package com.todo.pd.todo.exceptions;

public class CardAlreadyExistsException extends RuntimeException {
    public CardAlreadyExistsException(String message, Throwable err) {
        super(message, err);
    }
}
