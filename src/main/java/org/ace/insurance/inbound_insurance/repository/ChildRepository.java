package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.Child;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ChildRepository extends JpaRepository<Child, UUID> {

}
