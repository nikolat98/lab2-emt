package com.example.ebook.service;

import com.example.ebook.model.Author;
import com.example.ebook.model.Book;
import com.example.ebook.model.dto.BookDto;
import com.example.ebook.model.enumerations.Category;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> addBook(Long id, BookDto bookDto);
    Optional<Book> markAsTaken(Long id);
    Optional<Book> editBook(Long id, BookDto bookDto);

    void deleteById(Long id);
}
