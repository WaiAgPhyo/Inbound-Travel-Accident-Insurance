package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.AgentDTO;
import org.ace.insurance.inbound_insurance.entity.Agent;

import java.util.Optional;


public interface AgentService {
    Agent create (AgentDTO agentDTO);
    Optional<AgentDTO> checkAgentDetails(String agentLicenseNo, String agentPassword);
}
