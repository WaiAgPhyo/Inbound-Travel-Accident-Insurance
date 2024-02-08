package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.BeneficiaryDTO;
import org.ace.insurance.inbound_insurance.entity.Beneficiary;

public interface BeneficiaryService {
    Beneficiary createBeneficiary(BeneficiaryDTO beneficiaryDTO);
}
