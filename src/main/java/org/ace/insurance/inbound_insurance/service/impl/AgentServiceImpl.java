package org.ace.insurance.inbound_insurance.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.AgentDTO;
import org.ace.insurance.inbound_insurance.entity.Agent;
import org.ace.insurance.inbound_insurance.repository.AgentRepository;
import org.ace.insurance.inbound_insurance.service.AgentService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

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
    public Optional<AgentDTO> checkAgentDetails(String agentLicenseNo,String agentPassword) {
        Agent agent = agentRepository.findAgentByAgentLicenseNoAndAgentPassword(agentLicenseNo, agentPassword);

        if (agent != null) {
            AgentDTO response = new AgentDTO();
            response.setId(agent.getId());
            response.setAgentLicenseNo(agent.getAgentLicenseNo());
            response.setAgentPassword(agent.getAgentPassword());
            response.setAgentName(agent.getAgentName());
            return Optional.of(response);
        } else {
            return Optional.empty();
        }
    }
}
