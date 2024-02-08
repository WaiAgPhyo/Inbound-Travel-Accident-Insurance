package org.ace.insurance.inbound_insurance.service;



import org.ace.insurance.inbound_insurance.dto.CurrencyDTO;
import org.ace.insurance.inbound_insurance.entity.Currency;

import java.util.List;
import java.util.UUID;

public interface CurrencyService {
    Currency create (CurrencyDTO currencyDTO);
    List<Currency> findAll();
}
