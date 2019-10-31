package com.ion.mock.exception;

public class MockException extends Exception {

    private Long id;

    public MockException(Long id) {
        super(String.format("Mock is not found with id : '%s'", id));
    }
}