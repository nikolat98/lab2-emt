package com.example.ebook.service.impl;

import com.example.ebook.model.Author;
import com.example.ebook.model.dto.AuthorDto;
import com.example.ebook.repository.AuthorRepository;
import com.example.ebook.repository.CountryRepository;
import com.example.ebook.service.AuthorService;

import java.util.Optional;

public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public Optional<Author> findById(Long id) {
        return this.authorRepository.findById(id);
    }

    @Override
    public Optional<Author> addNewAuthor(AuthorDto authorDto) {
        Author author = new Author(authorDto.name, authorDto.surname, authorDto.country);

        return Optional.of(this.authorRepository.save(author));
    }

    @Override
    public void deleteById(Long id) {
        this.authorRepository.deleteById(id);
    }
}
