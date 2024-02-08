package org.ace.insurance.inbound_insurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.CurrencyDTO;
import org.ace.insurance.inbound_insurance.dto.PremiumRateDTO;
import org.ace.insurance.inbound_insurance.entity.Currency;
import org.ace.insurance.inbound_insurance.entity.PremiumRate;
import org.ace.insurance.inbound_insurance.service.CurrencyService;
import org.ace.insurance.inbound_insurance.service.PremiumRateService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/premiumRates")
@Slf4j
public class PremiumRateController {
    private final PremiumRateService premiumRateService;

    public PremiumRateController(PremiumRateService premiumRateService) {
        this.premiumRateService = premiumRateService;
    }
    @PostMapping
    public ResponseEntity<HttpResponse<PremiumRate>> create (@RequestBody PremiumRateDTO premiumRateDTO) {
        PremiumRate premiumRate = premiumRateService.create(premiumRateDTO);
        return createResponse(premiumRate, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<HttpResponse<List<PremiumRate>>> findAll() {
        List<PremiumRate> premiumRateList = premiumRateService.findAll();
        return createResponse(premiumRateList, HttpStatus.OK);
    }

    @GetMapping("/rate")
    public ResponseEntity<Double> getPremiumRate(@RequestParam("age") int age,
                                                 @RequestParam("days") int days) {
        try {
            double rate = premiumRateService.findPremiumRateByAgeAndPolicyDays(age, days);
            return ResponseEntity.ok(rate);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
