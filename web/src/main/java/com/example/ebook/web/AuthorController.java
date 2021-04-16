package com.example.ebook.web;

import com.example.ebook.model.Author;
import com.example.ebook.model.dto.AuthorDto;
import com.example.ebook.service.AuthorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable Long id){
        return this.authorService.findById(id).map(author -> ResponseEntity.ok().body(author))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Author> addNewAuthor(@RequestBody AuthorDto authorDto){
        return this.authorService.addNewAuthor(authorDto).map(author -> ResponseEntity.ok().body(author))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteAuthor(@PathVariable Long id){
        this.authorService.deleteById(id);

        return this.authorService.findById(id).isEmpty() ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }
}
