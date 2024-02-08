package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CountryRepository extends JpaRepository<Country, UUID> {
}
