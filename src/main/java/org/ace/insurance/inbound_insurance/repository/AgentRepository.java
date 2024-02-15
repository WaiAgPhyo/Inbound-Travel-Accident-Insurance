package org.ace.insurance.inbound_insurance.repository;

import org.ace.insurance.inbound_insurance.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AgentRepository extends JpaRepository<Agent, UUID> {
    @Query("SELECT a FROM Agent a WHERE a.agentLicenseNo = :inPutAgentLicenseNo AND a.agentPassword = :inPutAgentPassword ")
    Agent findAgentByAgentLicenseNoAndAgentPassword(@Param("inPutAgentLicenseNo") String inPutAgentLicenseNo, @Param("inPutAgentPassword") String inPutAgentPassword);

}
