package org.ace.insurance.inbound_insurance.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.InsuredPersonDTO;
import org.ace.insurance.inbound_insurance.entity.Beneficiary;
import org.ace.insurance.inbound_insurance.entity.InsuredPerson;
import org.ace.insurance.inbound_insurance.repository.BeneficiaryRepository;
import org.ace.insurance.inbound_insurance.repository.InsuredPersonRepository;
import org.ace.insurance.inbound_insurance.service.InsuredPersonService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class InsuredPersonServiceImpl implements InsuredPersonService {
    private final InsuredPersonRepository insuredPersonRepo;
    private final BeneficiaryRepository beneficiaryRepo;

    @Override
    public InsuredPerson createInsuredPerson(InsuredPersonDTO insuredPersonDTO) {
        Beneficiary beneficiary = beneficiaryRepo.findById(insuredPersonDTO.getBeneficiaryID())
                .orElseThrow(()->new IllegalArgumentException("invalid beneficiary id"));
        try {
            InsuredPerson insuredPerson = InsuredPerson.builder()
                    .insuredPersonName(insuredPersonDTO.getInsuredPersonName())
                    .insuredPersonDOB(insuredPersonDTO.getInsuredPersonDOB())
                    .insuredPersonPhoneNumber(insuredPersonDTO.getInsuredPersonPhoneNumber())
                    .insuredPersonEmail(insuredPersonDTO.getInsuredPersonEmail())
                    .insuredPersonAddressMyanmar(insuredPersonDTO.getInsuredPersonAddressMyanmar())
                    .insuredPersonResidentAddress(insuredPersonDTO.getInsuredPersonResidentAddress())
                    .insuredPersonGender(insuredPersonDTO.getInsuredPersonGender())
                    .insuredPersonResidentCountry(insuredPersonDTO.getInsuredPersonResidentCountry())
                    .isChild(insuredPersonDTO.isChild())
                    .passportNumber(insuredPersonDTO.getPassportNumber())
                    .passportIssueDate(insuredPersonDTO.getPassportIssueDate())
                    .passportIssuedCountry(insuredPersonDTO.getPassportIssuedCountry())
                    .beneficiaryID(beneficiary)
                    .build();
            return insuredPersonRepo.save(insuredPerson);
        }catch (OptimisticLockingFailureException e){
            throw new RuntimeException("Optimistic locking conflict");
        }
    }
}
