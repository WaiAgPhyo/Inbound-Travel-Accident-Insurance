package org.ace.insurance.inbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.InboundProposalDTO;
import org.ace.insurance.inbound_insurance.entity.InboundProposal;
import org.ace.insurance.inbound_insurance.service.InboundProposalService;
import org.ace.insurance.inbound_insurance.service.PremiumRateService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;


@RestController
@RequestMapping("/inboundProposal")
@Slf4j
@AllArgsConstructor
public class InboundProposalController {

    private final InboundProposalService inboundProposalService;
    private final PremiumRateService premiumRateService;

    @PostMapping
    public ResponseEntity<HttpResponse<InboundProposal>> create(@RequestBody InboundProposalDTO inboundProposalDTO){
        InboundProposal inboundProposal = inboundProposalService.create(inboundProposalDTO);
        return createResponse(inboundProposal, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<HttpResponse<InboundProposal>> searchEnquiry(@RequestParam String passportNo,
                                                                       @RequestParam String issuedCountry){
        InboundProposal inboundProposal = inboundProposalService.searchEnquiry(passportNo,issuedCountry);
        return createResponse(inboundProposal,HttpStatus.OK);
    }

    @GetMapping("/findByCertificateId")
    public ResponseEntity<HttpResponse<InboundProposal>> findByCertificateId(@RequestParam("id") String certificateId){
        InboundProposal inboundProposal = inboundProposalService.findByCertificateId(certificateId);
        return createResponse(inboundProposal,HttpStatus.OK);
    }

}
