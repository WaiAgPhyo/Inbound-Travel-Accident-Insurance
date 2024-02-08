package org.ace.insurance.inbound_insurance.service.serviceImpl;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.BeneficiaryDTO;
import org.ace.insurance.inbound_insurance.entity.Beneficiary;
import org.ace.insurance.inbound_insurance.repository.BeneficiaryRepository;
import org.ace.insurance.inbound_insurance.service.BeneficiaryService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class BeneficiaryServiceImpl implements BeneficiaryService {

    private final BeneficiaryRepository beneficiaryRepository;
    @Override
    public Beneficiary createBeneficiary(BeneficiaryDTO beneficiaryDTO) {
        try {
            Beneficiary beneficiary = Beneficiary.builder()
                    .beneficiaryName(beneficiaryDTO.getBeneficiaryName())
                    .beneficiaryDOB(beneficiaryDTO.getBeneficiaryDOB())
                    .beneficiaryEmail(beneficiaryDTO.getBeneficiaryEmail())
                    .beneficiaryNRC(beneficiaryDTO.getBeneficiaryNRC())
                    .beneficiaryPhoneNumber(beneficiaryDTO.getBeneficiaryPhoneNumber())
                    .beneficiaryRelationship(beneficiaryDTO.getBeneficiaryRelationship())
                    .beneficiaryResidentAddress(beneficiaryDTO.getBeneficiaryResidentAddress())
                    .beneficiaryResidentCountry(beneficiaryDTO.getBeneficiaryResidentCountry())
                    .build();
            return beneficiaryRepository.save(beneficiary);
        }catch (OptimisticLockingFailureException e){
            throw new RuntimeException("Optimistic locking conflict");
        }

    }
}
