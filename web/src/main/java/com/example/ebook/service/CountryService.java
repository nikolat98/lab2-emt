package com.example.ebook.service;

import com.example.ebook.model.Country;
import com.example.ebook.model.dto.CountryDto;

import java.util.Optional;

public interface CountryService {

    Optional<Country> findById(Long id);
    Optional<Country> addNewCountry(CountryDto countryDto);

    void deleteById(Long id);

}
