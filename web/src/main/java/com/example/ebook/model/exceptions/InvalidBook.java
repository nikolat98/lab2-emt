package com.example.ebook.model.exceptions;

public class InvalidBook extends RuntimeException {

    public InvalidBook() {
        super("Invalid book");
    }

}
