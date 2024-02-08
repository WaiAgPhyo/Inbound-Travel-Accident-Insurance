package org.ace.insurance.inbound_insurance.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ace.insurance.inbound_insurance.dto.PremiumRateDTO;

import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "PremiumRates")
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PremiumRate {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private int policyDays;

    private int fromAge;
    private int toAge;

    private double rate;

    private UUID createdUserId;
    private LocalDateTime createdDate;

    private UUID updatedUserId;
    private LocalDateTime updatedDate;

    @Version
    private Long version;


    @PrePersist
    protected void onCreate(){
        createdDate = LocalDateTime.now();
        version = 1L;
    }

    @PreUpdate
    protected void onUpdate(){
        updatedDate = LocalDateTime.now();
        version++;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "currencyId")
    private Currency currency;

    public static PremiumRate of (PremiumRateDTO premiumRateDTO){
        PremiumRate premiumRate = PremiumRate.builder()
                .policyDays(premiumRateDTO.getPolicyDays())
                .fromAge(premiumRateDTO.getFromAge())
                .toAge(premiumRateDTO.getToAge())
                .rate(premiumRateDTO.getRate()).build();
        return premiumRate;
    }
}

