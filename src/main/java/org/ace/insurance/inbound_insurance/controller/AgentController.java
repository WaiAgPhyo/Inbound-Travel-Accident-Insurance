package org.ace.insurance.inbound_insurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.AgentDTO;
import org.ace.insurance.inbound_insurance.entity.Agent;
import org.ace.insurance.inbound_insurance.service.AgentService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/agent")
@Slf4j
public class AgentController {
    private final AgentService agentService;

    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }
    @PostMapping
    public ResponseEntity<HttpResponse<Agent>> create (@RequestBody AgentDTO agentDTO) {
        Agent agent = agentService.create(agentDTO);
        return createResponse(agent, HttpStatus.CREATED);
    }

    @GetMapping("/check")
    public ResponseEntity<HttpResponse<Agent>> getAgentDetails(@RequestParam("agentLicenseNo") String agentLicenseNo,
                                                               @RequestParam("agentPassword") String agentPassword) {
        Agent agent = agentService.findAgentByAgentLicenseNoAndAgentPassword(agentLicenseNo, agentPassword);

            return createResponse(agent,HttpStatus.OK);

    }
}
