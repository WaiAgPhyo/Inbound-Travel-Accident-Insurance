package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.InsuredPersonDTO;
import org.ace.insurance.inbound_insurance.entity.InsuredPerson;

public interface InsuredPersonService {
    InsuredPerson createInsuredPerson(InsuredPersonDTO insuredPersonDTO);
}
