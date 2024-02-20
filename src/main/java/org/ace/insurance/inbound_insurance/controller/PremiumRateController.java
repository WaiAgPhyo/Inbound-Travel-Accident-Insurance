package org.ace.insurance.inbound_insurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.PremiumRateDTO;
import org.ace.insurance.inbound_insurance.entity.PremiumRate;
import org.ace.insurance.inbound_insurance.service.PremiumRateService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/premiumRate")
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

//    @GetMapping
//    public ResponseEntity<HttpResponse<List<PremiumRate>>> findAll() {
//        List<PremiumRate> premiumRateList = premiumRateService.findAll();
//        return createResponse(premiumRateList, HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity<HttpResponse<Double>> getPremiumRate(@RequestParam String age, @RequestParam int days,@RequestParam boolean child){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate ageLD = LocalDate.parse(age,formatter);
        double rate = premiumRateService.getPremiumRate(ageLD,days,child);
        return createResponse(rate,HttpStatus.OK);
    }

}
