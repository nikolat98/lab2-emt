package com.example.ebook.service;

import com.example.ebook.model.Author;
import com.example.ebook.model.dto.AuthorDto;

import java.util.Optional;

public interface AuthorService {

    Optional<Author> findById(Long id);
    Optional<Author> addNewAuthor(AuthorDto authorDto);

    void deleteById(Long id);

}
