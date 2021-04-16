package com.example.ebook.model.exceptions;

public class InvalidCountry extends RuntimeException{

    public InvalidCountry() {
        super("Invalid country");
    }
}
