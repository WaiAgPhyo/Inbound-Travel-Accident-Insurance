package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.AgentDTO;
import org.ace.insurance.inbound_insurance.entity.Agent;


public interface AgentService {
    Agent create (AgentDTO agentDTO);
    Agent findAgentByAgentLicenseNoAndAgentPassword(String agentLicenseNo, String agentPassword);
}
