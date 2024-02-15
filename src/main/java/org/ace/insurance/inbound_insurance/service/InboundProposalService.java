package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.InboundProposalDTO;
import org.ace.insurance.inbound_insurance.entity.InboundProposal;

public interface InboundProposalService {
    InboundProposal create(InboundProposalDTO inboundProposalDTO);
}
