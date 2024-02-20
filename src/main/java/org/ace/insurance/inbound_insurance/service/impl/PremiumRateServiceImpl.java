package org.ace.insurance.inbound_insurance.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.PremiumRateDTO;
import org.ace.insurance.inbound_insurance.entity.Currency;
import org.ace.insurance.inbound_insurance.entity.PremiumRate;
import org.ace.insurance.inbound_insurance.repository.AgentRepository;
import org.ace.insurance.inbound_insurance.repository.CurrencyRepository;
import org.ace.insurance.inbound_insurance.repository.PremiumRateRepository;
import org.ace.insurance.inbound_insurance.service.PremiumRateService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@Slf4j
public class PremiumRateServiceImpl implements PremiumRateService {
    private final PremiumRateRepository premiumRateRepository;
    private final CurrencyRepository currencyRepository;
    public PremiumRateServiceImpl(PremiumRateRepository premiumRateRepository, CurrencyRepository currencyRepository, AgentRepository agentRepository) {
        this.premiumRateRepository = premiumRateRepository;
        this.currencyRepository = currencyRepository;
    }

    @Override
    public PremiumRate create(PremiumRateDTO premiumRateDTO) {
        try {
            Currency currency = currencyRepository.findById(premiumRateDTO.getCurrencyId())
                    .orElseThrow(() -> new RuntimeException("No Currency found"));

            PremiumRate premiumRate = PremiumRate.of(premiumRateDTO);
            premiumRate.setCurrency(currency);
//            log.info("PremiumRate created: {}", premiumRate);
            return premiumRateRepository.save(premiumRate);
        }catch (OptimisticLockingFailureException ex) {
            throw new RuntimeException("Optimistic locking conflict");
        }
    }

    @Override
    public List<PremiumRate> findAll() {
        return premiumRateRepository.findAll();
    }

    @Override
    public double getPremiumRate(LocalDate age, int days, boolean isChild) {
        if (isChild == true){
            int childAge = 18;
            return premiumRateRepository.findPremiumRateByFromAgeAndToAgeAndPolicyDays(childAge,days);
        }
        int DOB = age.getYear();
        int date = LocalDate.now().getYear();
        int insuredPersonAge = date - DOB;
        return premiumRateRepository.findPremiumRateByFromAgeAndToAgeAndPolicyDays(insuredPersonAge,days);
    }


}
