package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.CountryDTO;
import org.ace.insurance.inbound_insurance.entity.Country;

import java.util.List;

public interface CountryService {
    Country createCountry(CountryDTO countryDTO);

    List<Country> findAllCountry();
}
