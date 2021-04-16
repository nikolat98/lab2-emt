package com.example.ebook.service.impl;

import com.example.ebook.model.Country;
import com.example.ebook.model.dto.CountryDto;
import com.example.ebook.repository.CountryRepository;
import com.example.ebook.service.CountryService;

import java.util.Optional;

public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Country> findById(Long id) {
        return this.countryRepository.findById(id);
    }

    @Override
    public Optional<Country> addNewCountry(CountryDto countryDto) {
        Country country = new Country(countryDto.name, countryDto.continent);

        return Optional.of(this.countryRepository.save(country));
    }

    @Override
    public void deleteById(Long id) {
        this.countryRepository.deleteById(id);
    }
}
