package org.ace.insurance.inbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.InsuredPersonDTO;
import org.ace.insurance.inbound_insurance.entity.InsuredPerson;
import org.ace.insurance.inbound_insurance.service.InsuredPersonService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/insuredPerson")
@Slf4j
@AllArgsConstructor
public class InsuredPersonController {
    private final InsuredPersonService insuredPersonService;

    @PostMapping
    public ResponseEntity<HttpResponse<InsuredPerson>> createInsuredPerson(@RequestBody InsuredPersonDTO insuredPersonDTO){
        InsuredPerson insuredPerson = insuredPersonService.createInsuredPerson(insuredPersonDTO);
        return createResponse(insuredPerson, HttpStatus.CREATED);
    }
}
