package org.ace.insurance.inbound_insurance.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.CurrencyDTO;
import org.ace.insurance.inbound_insurance.entity.Currency;
import org.ace.insurance.inbound_insurance.repository.CurrencyRepository;
import org.ace.insurance.inbound_insurance.service.CurrencyService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Slf4j
public class CurrencyServiceImpl implements CurrencyService {

    private final CurrencyRepository currencyRepository;

    public CurrencyServiceImpl(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    @Override
    public Currency create(CurrencyDTO currencyDTO) {
        try {
            Currency currency = Currency.builder()
                    .currencyName(currencyDTO.getCurrencyName())
                    .description(currencyDTO.getDescription()).build();
//            log.info("currency created: {}", currency);
            return currencyRepository.save(currency);
        }catch (OptimisticLockingFailureException ex) {
            throw new RuntimeException("Optimistic locking conflict");
        }
    }

    @Override
    public List<Currency> findAll() {
        return currencyRepository.findAll();
    }

}

