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
    public double findPremiumRateByAgeAndPolicyDays(int age, int days) {
        PremiumRate premiumRate = premiumRateRepository.findPremiumRateByFromAgeAndToAgeAndPolicyDays(age,days);
        if (premiumRate != null) {
            return premiumRate.getRate();
        } else {
            throw new RuntimeException("Premium rate not found for the given age and policy days");
        }
    }
}
