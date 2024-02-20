package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.PremiumRateDTO;
import org.ace.insurance.inbound_insurance.entity.PremiumRate;

import java.time.LocalDate;
import java.util.List;

public interface PremiumRateService {
    PremiumRate create (PremiumRateDTO premiumRateDTO);
    List<PremiumRate> findAll();

    double getPremiumRate(LocalDate age, int days, boolean isChild);
}
