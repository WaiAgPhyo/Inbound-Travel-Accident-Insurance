package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.PremiumRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PremiumRateRepository extends JpaRepository<PremiumRate, UUID> {

    @Query("SELECT pr.rate FROM PremiumRate pr  WHERE pr.fromAge <= :age  AND pr.toAge >= :age AND pr.policyDays = :days")
    double findPremiumRateByFromAgeAndToAgeAndPolicyDays(@Param("age") int age, @Param("days") int days);
}
