package org.ace.insurance.inbound_insurance.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.CountryDTO;
import org.ace.insurance.inbound_insurance.entity.Country;
import org.ace.insurance.inbound_insurance.repository.CountryRepository;
import org.ace.insurance.inbound_insurance.service.CountryService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepo;
    @Override
    public Country createCountry(CountryDTO countryDTO) {
        try {
            Country country = Country.builder()
                    .countryName(countryDTO.getCountryName())
                    .countryCode(countryDTO.getCountryCode())
                    .shortCountryName(countryDTO.getShortCountryName())
                    .build();
            log.info("user created: {}", country);
            return countryRepo.save(country);
        }catch (OptimisticLockingFailureException e){
            throw new RuntimeException("Optimistic locking conflict");
        }


    }

    @Override
    public List<Country> findAllCountry() {
        return countryRepo.findAll();
    }
}
