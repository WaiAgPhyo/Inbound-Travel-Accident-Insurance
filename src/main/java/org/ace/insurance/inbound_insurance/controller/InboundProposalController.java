package org.ace.insurance.inbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.InboundProposalDTO;
import org.ace.insurance.inbound_insurance.dto.InboundProposalReturnDTO;
import org.ace.insurance.inbound_insurance.entity.InboundProposal;
import org.ace.insurance.inbound_insurance.service.InboundProposalService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;


@RestController
@RequestMapping("/inboundProposal")
@Slf4j
@AllArgsConstructor
public class InboundProposalController {

    private final InboundProposalService inboundProposalService;

    @PostMapping
    public ResponseEntity<HttpResponse<InboundProposal>> create(@RequestBody InboundProposalDTO inboundProposalDTO){
        InboundProposal inboundProposal = inboundProposalService.create(inboundProposalDTO);
        return createResponse(inboundProposal, HttpStatus.CREATED);
    }

    @GetMapping("/searchEnquiry")
    public ResponseEntity<HttpResponse<List<InboundProposal>>> searchEnquiry(@RequestParam String passportNo,
                                                                            @RequestParam String issuedCountry){
        List<InboundProposal> inboundProposal = inboundProposalService.searchEnquiry(passportNo,issuedCountry);
        return createResponse(inboundProposal,HttpStatus.OK);
    }

    @GetMapping("/findByCertificateNo")
    public ResponseEntity<HttpResponse<InboundProposal>> findByCertificateNo(@RequestParam("id") String certificateNo){
        InboundProposal inboundProposal = inboundProposalService.findByCertificateNo(certificateNo);
        return createResponse(inboundProposal,HttpStatus.OK);
    }

}
