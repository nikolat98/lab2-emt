package com.example.ebook.service.impl;

import com.example.ebook.model.Author;
import com.example.ebook.model.Book;
import com.example.ebook.model.dto.BookDto;
import com.example.ebook.model.enumerations.Category;
import com.example.ebook.model.exceptions.InvalidBook;
import com.example.ebook.repository.AuthorRepository;
import com.example.ebook.repository.BookRepository;
import com.example.ebook.service.BookService;

import javax.management.InvalidAttributeValueException;
import java.util.List;
import java.util.Optional;

public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }


    @Override
    public List<Book> findAll() {
        return this.bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return this.bookRepository.findById(id);
    }

    @Override
    public Optional<Book> addBook(Long id, BookDto bookDto) {
        Book book = this.bookRepository.findById(id).orElseThrow(InvalidBook::new);
        return Optional.of(this.bookRepository.save(book));
    }


    @Override
    public Optional<Book> markAsTaken(Long id) {
        Book book = this.bookRepository.findById(id).orElseThrow(InvalidBook::new);
        book.setAvailableCopies(book.getAvailableCopies() - 1);
        this.bookRepository.save(book);

        return Optional.of(book);
    }

    @Override
    public Optional<Book> editBook(Long id, BookDto bookDto) {
        Book book = this.bookRepository.findById(id).orElseThrow(InvalidBook::new);
        book.setName(bookDto.name);
        book.setAuthor(bookDto.author);
        book.setCategory(bookDto.category);
        book.setAvailableCopies(bookDto.availableCopies);

        this.bookRepository.save(book);

        return Optional.of(book);
    }

    @Override
    public void deleteById(Long id) {
        this.bookRepository.deleteById(id);
    }
}
