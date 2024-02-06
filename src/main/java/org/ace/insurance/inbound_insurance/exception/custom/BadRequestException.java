package org.ace.insurance.inbound_insurance.exception.custom;

public class BadRequestException extends RuntimeException{
    public BadRequestException(String message) {
        super(message);
    }
}
