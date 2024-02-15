package org.ace.insurance.inbound_insurance.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PremiumRateDTO {
    private int policyDays;

    private int fromAge;
    private int toAge;

    private double rate;

    private UUID currencyId;
}

