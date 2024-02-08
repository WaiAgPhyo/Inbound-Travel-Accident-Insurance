package org.ace.insurance.inbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.CountryDTO;
import org.ace.insurance.inbound_insurance.entity.Country;
import org.ace.insurance.inbound_insurance.service.CountryService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/countries")
@Slf4j
@AllArgsConstructor
public class CountryController {

    private final CountryService countryService;

    @PostMapping
    public ResponseEntity<HttpResponse<Country>> createCountry(@RequestBody CountryDTO countryDTO){
            Country country = countryService.createCountry(countryDTO);
            return createResponse(country, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<HttpResponse<List<Country>>> findAllCountry(){
        List<Country> countries = countryService.findAllCountry();
        return createResponse(countries,HttpStatus.OK);
    }
}

