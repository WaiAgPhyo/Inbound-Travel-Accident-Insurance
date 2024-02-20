package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.InboundProposalDTO;
import org.ace.insurance.inbound_insurance.entity.InboundProposal;

import java.time.LocalDate;

public interface InboundProposalService {
    InboundProposal create(InboundProposalDTO inboundProposalDTO);
    InboundProposal searchEnquiry(String passportNo, String issuedCountry);

    InboundProposal findByCertificateId(String certificateId);

}
