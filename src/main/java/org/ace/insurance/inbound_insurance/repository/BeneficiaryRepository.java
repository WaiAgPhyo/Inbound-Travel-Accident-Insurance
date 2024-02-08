package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.Beneficiary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary, UUID> {
}
