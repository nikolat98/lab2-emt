package com.example.ebook.web;


import com.example.ebook.model.Country;
import com.example.ebook.model.dto.CountryDto;
import com.example.ebook.service.CountryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Country> getcountryById(@PathVariable Long id){
        return this.countryService.findById(id).map(country -> ResponseEntity.ok().body(country))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Country> addNewCountry(@RequestBody CountryDto countryDto){
        return this.countryService.addNewCountry(countryDto).map(country -> ResponseEntity.ok().body(country))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCountry(@PathVariable Long id){
        this.countryService.deleteById(id);
        return this.countryService.findById(id).isEmpty() ? ResponseEntity.ok().build() :
            ResponseEntity.badRequest().build();
    }

}
