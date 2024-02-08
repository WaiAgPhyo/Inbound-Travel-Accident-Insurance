package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency,UUID> {

}
