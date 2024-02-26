package org.ace.insurance.inbound_insurance.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.InboundProposalDTO;
import org.ace.insurance.inbound_insurance.dto.InboundProposalReturnDTO;
import org.ace.insurance.inbound_insurance.entity.*;
import org.ace.insurance.inbound_insurance.repository.*;
import org.ace.insurance.inbound_insurance.service.InboundProposalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class InboundProposalServiceImpl implements InboundProposalService {

    private final InsuredPersonRepository insuredPersonRepo;
    private final BeneficiaryRepository beneficiaryRepo;
    private final InboundProposalRepository inboundProposalRepo;
    private final PremiumRateRepository premiumRateRepo;
    private final ChildRepository childRepo;
    private final AgentRepository agentRepo;


    @Override
    @Transactional
    public InboundProposal create(InboundProposalDTO inboundProposalDTO){
        try {

            Beneficiary beneficiary = Beneficiary.builder()
                    .beneficiaryName(inboundProposalDTO.getBeneficiaryName())
                    .beneficiaryDOB(inboundProposalDTO.getBeneficiaryDOB())
                    .beneficiaryNRC(inboundProposalDTO.getBeneficiaryNRC())
                    .beneficiaryRelationship(inboundProposalDTO.getBeneficiaryRelationship())
                    .beneficiaryPhoneNumber(inboundProposalDTO.getBeneficiaryPhoneNumber())
                    .beneficiaryEmail(inboundProposalDTO.getBeneficiaryEmail())
                    .beneficiaryResidentAddress(inboundProposalDTO.getBeneficiaryResidentAddress())
                    .beneficiaryResidentCountry(inboundProposalDTO.getBeneficiaryResidentCountry()).build();
            beneficiaryRepo.save(beneficiary);
            InsuredPerson insuredPerson = InsuredPerson.builder()
                    .passportNumber(inboundProposalDTO.getPassportNumber())
                    .passportIssueDate(inboundProposalDTO.getPassportIssuedDate())
                    .passportIssuedCountry(inboundProposalDTO.getPassportIssuedCountry())
                    .insuredPersonName(inboundProposalDTO.getInsuredPersonName())
                    .insuredPersonDOB(inboundProposalDTO.getInsuredPersonDOB())
                    .insuredPersonGender(inboundProposalDTO.getInsuredPersonGender())
                    .insuredPersonPhoneNumber(inboundProposalDTO.getInsuredPersonPhoneNumber())
                    .insuredPersonEmail(inboundProposalDTO.getInsuredPersonEmail())
                    .insuredPersonResidentAddress(inboundProposalDTO.getInsuredPersonResidentAddress())
                    .insuredPersonAddressMyanmar(inboundProposalDTO.getInsuredPersonAddressMyanmar())
                    .insuredPersonResidentCountry(inboundProposalDTO.getBeneficiaryResidentCountry())
                    .isChild(inboundProposalDTO.isChild())
                    .beneficiaryID(beneficiary)
                    .build();
            insuredPersonRepo.save(insuredPerson);
            if(inboundProposalDTO.isChild()){
                Child child = Child.builder()
                        .childName(inboundProposalDTO.getChildName())
                        .childDOB(inboundProposalDTO.getChildDOB())
                        .childGender(inboundProposalDTO.getChildGender())
                        .guardianName(inboundProposalDTO.getGuardianName())
                        .childRelationship(inboundProposalDTO.getChildRelationship())
                        .insuredPersonID(insuredPerson).build();
                childRepo.save(child);
            }
            if(inboundProposalDTO.getAgentID() != null){
                Agent agent = agentRepo.findById(inboundProposalDTO.getAgentID())
                        .orElseThrow(()->new IllegalArgumentException("invalid agent id"));
                InboundProposal inboundProposal = InboundProposal.builder()
                        .journeyFrom(inboundProposalDTO.getJourneyFrom())
                        .journeyTo(inboundProposalDTO.getJourneyTo())
                        .estimateArrivalDate(inboundProposalDTO.getEstimateArrivalDate())
                        .policyStartDate(inboundProposalDTO.getEstimateArrivalDate())
                        .policyEndDate(endDate(inboundProposalDTO))
                        .submittedDate(LocalDate.now())
                        .coveragePlan(inboundProposalDTO.getCoveragePlan())
                        .premiumRate(premiumRateRepo.findPremiumRateByFromAgeAndToAgeAndPolicyDays(calculateAge(inboundProposalDTO),inboundProposalDTO.getCoveragePlan()))
                        .insuredPerson(insuredPerson)
                        .agent(agent)
                        .childName(inboundProposalDTO.getChildName())
                        .childDOB(inboundProposalDTO.getChildDOB())
                        .build();
                inboundProposalRepo.save(inboundProposal);
                //Child Info Carry..

                return inboundProposal;
            }
            InboundProposal inboundProposal = InboundProposal.builder()
                    .journeyFrom(inboundProposalDTO.getJourneyFrom())
                    .journeyTo(inboundProposalDTO.getJourneyTo())
                    .estimateArrivalDate(inboundProposalDTO.getEstimateArrivalDate())
                    .policyStartDate(inboundProposalDTO.getEstimateArrivalDate())
                    .policyEndDate(endDate(inboundProposalDTO))
                    .submittedDate(LocalDate.now())
                    .coveragePlan(inboundProposalDTO.getCoveragePlan())
                    .premiumRate(premiumRateRepo.findPremiumRateByFromAgeAndToAgeAndPolicyDays(calculateAge(inboundProposalDTO), inboundProposalDTO.getCoveragePlan()))
                    .insuredPerson(insuredPerson)
                    .childName(inboundProposalDTO.getChildName())
                    .childDOB(inboundProposalDTO.getChildDOB())
                    .build();
            inboundProposalRepo.save(inboundProposal);

            return inboundProposal;
        }catch (OptimisticLockingFailureException e){
            throw new RuntimeException("optimistic locking conflict");
        }

    }

    @Override
    public List<InboundProposal> searchEnquiry(String passportNo, String issuedCountry) {
        List<InboundProposal> inboundProposal = inboundProposalRepo.findByInsuredPersonPassportNumberAndInsuredPersonPassportIssuedCountry(passportNo,issuedCountry);
        return inboundProposal;
    }

    @Override
    public InboundProposal findByCertificateNo(String certificateNo) {
        return inboundProposalRepo.findByCertificateNo(certificateNo);
    }

    private int calculateAge(InboundProposalDTO inboundProposalDTO){
        if(inboundProposalDTO.isChild()){
            int DOB =inboundProposalDTO.getChildDOB().getYear();
            int date = LocalDate.now().getYear();
            int age = date - DOB;
            return age;
        }
        int DOB =inboundProposalDTO.getInsuredPersonDOB().getYear();
        int date = LocalDate.now().getYear();
        int age = date - DOB;
        return age;
    }

    private LocalDate endDate(InboundProposalDTO inboundProposalDTO){
        LocalDate startDate = inboundProposalDTO.getEstimateArrivalDate();
        LocalDate endDate = startDate.plusDays(inboundProposalDTO.getCoveragePlan());
        return endDate;
    }
}
