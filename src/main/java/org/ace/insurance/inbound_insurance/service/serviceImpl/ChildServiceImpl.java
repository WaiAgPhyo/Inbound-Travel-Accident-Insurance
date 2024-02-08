package org.ace.insurance.inbound_insurance.service.serviceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.ChildDTO;
import org.ace.insurance.inbound_insurance.entity.Child;
import org.ace.insurance.inbound_insurance.entity.InsuredPerson;
import org.ace.insurance.inbound_insurance.repository.ChildRepository;
import org.ace.insurance.inbound_insurance.repository.InsuredPersonRepository;
import org.ace.insurance.inbound_insurance.service.ChildService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class ChildServiceImpl implements ChildService {

    private final ChildRepository childRepo;
    private final InsuredPersonRepository insuredPersonRepo;
    @Override
    public Child createChild(ChildDTO childDTO) {
        InsuredPerson insuredPerson = insuredPersonRepo.findById(childDTO.getInsuredPersonID())
                .orElseThrow(()->new IllegalArgumentException("invalid insurance person id"));
        try {
            Child child = Child.builder()
                    .childName(childDTO.getChildName())
                    .childDOB(childDTO.getChildDOB())
                    .childGender(childDTO.getChildGender())
                    .childRelationship(childDTO.getChildRelationship())
                    .guardianName(childDTO.getGuardianName())
                    .insuredPersonID(insuredPerson)
                    .build();
            return childRepo.save(child);
        }catch (OptimisticLockingFailureException e){
            throw new RuntimeException("Optimistic Locking conflict");
        }



    }
}
