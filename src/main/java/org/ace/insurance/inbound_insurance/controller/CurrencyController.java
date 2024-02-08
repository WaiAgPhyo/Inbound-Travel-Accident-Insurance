package org.ace.insurance.inbound_insurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.CurrencyDTO;
import org.ace.insurance.inbound_insurance.entity.Currency;
import org.ace.insurance.inbound_insurance.service.CurrencyService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/currencies")
@Slf4j
public class CurrencyController {
    private final CurrencyService currencyService;

    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }
    @PostMapping
    public ResponseEntity<HttpResponse<Currency>> create (@RequestBody CurrencyDTO currencyDTO) {
        Currency currency = currencyService.create(currencyDTO);
        return createResponse(currency, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<HttpResponse<List<Currency>>> findAll() {
        List<Currency> currencyList = currencyService.findAll();
        return createResponse(currencyList, HttpStatus.OK);
    }

}
