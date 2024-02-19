package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.InboundProposal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface InboundProposalRepository extends JpaRepository<InboundProposal, UUID> {
    InboundProposal findByInsuredPersonPassportNumberAndInsuredPersonPassportIssuedCountry(String passportNo, String issuedCountry);
}
