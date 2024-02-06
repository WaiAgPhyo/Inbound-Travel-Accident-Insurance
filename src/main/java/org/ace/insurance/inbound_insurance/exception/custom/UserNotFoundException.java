package org.ace.insurance.inbound_insurance.exception.custom;

public class UserNotFoundException extends Exception{
    public UserNotFoundException(String message) {
        super(message);
    }
}
