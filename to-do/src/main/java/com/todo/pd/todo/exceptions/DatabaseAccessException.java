package com.todo.pd.todo.exceptions;

public class DatabaseAccessException extends RuntimeException {

    public DatabaseAccessException(String message, Throwable err) {
        super(message, err);
    }
}
