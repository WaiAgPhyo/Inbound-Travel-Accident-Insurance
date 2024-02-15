package org.ace.insurance.inbound_insurance.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.AgentDTO;
import org.ace.insurance.inbound_insurance.entity.Agent;
import org.ace.insurance.inbound_insurance.repository.AgentRepository;
import org.ace.insurance.inbound_insurance.service.AgentService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AgentServiceImpl implements AgentService {
    private final AgentRepository agentRepository;
    public AgentServiceImpl(AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }
    @Override
    public Agent create(AgentDTO agentDTO) {
        try {
            Agent agent = Agent.builder()
                    .agentName(agentDTO.getAgentName())
                    .agentPassword(agentDTO.getAgentPassword())
                    .agentLicenseNo(agentDTO.getAgentLicenseNo()).build();
//            log.info("agent created: {}", agent);
            return agentRepository.save(agent);
        }catch (OptimisticLockingFailureException ex) {
            throw new RuntimeException("Optimistic locking conflict");
        }
    }

    @Override
    public Agent findAgentByAgentLicenseNoAndAgentPassword(String agentLicenseNo, String agentPassword) {
        return agentRepository.findAgentByAgentLicenseNoAndAgentPassword(agentLicenseNo, agentPassword);
    }
}
