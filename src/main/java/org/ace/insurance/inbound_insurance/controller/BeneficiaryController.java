package org.ace.insurance.inbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.BeneficiaryDTO;
import org.ace.insurance.inbound_insurance.entity.Beneficiary;
import org.ace.insurance.inbound_insurance.service.BeneficiaryService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/beneficiaries")
@Slf4j
@AllArgsConstructor
public class BeneficiaryController {

    private final BeneficiaryService beneficiaryService;

    @PostMapping
    public ResponseEntity<HttpResponse<Beneficiary>> createBeneficiary(@RequestBody BeneficiaryDTO beneficiaryDTO){
        Beneficiary beneficiary = beneficiaryService.createBeneficiary(beneficiaryDTO);
        return createResponse(beneficiary, HttpStatus.CREATED);
    }

}
