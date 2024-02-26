package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.InboundProposalDTO;
import org.ace.insurance.inbound_insurance.dto.InboundProposalReturnDTO;
import org.ace.insurance.inbound_insurance.entity.InboundProposal;

import java.time.LocalDate;
import java.util.List;

public interface InboundProposalService {
    InboundProposal create(InboundProposalDTO inboundProposalDTO);
    List<InboundProposal> searchEnquiry(String passportNo, String issuedCountry);

    InboundProposal findByCertificateNo(String certificateNo);

}
