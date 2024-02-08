package org.ace.insurance.inbound_insurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.AgentDTO;
import org.ace.insurance.inbound_insurance.entity.Agent;
import org.ace.insurance.inbound_insurance.service.AgentService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/agents")
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
    public ResponseEntity<Map<String, String>> getAgentDetails(@RequestParam("agentLicenseNo") String agentLicenseNo,
                                                               @RequestParam("agentPassword") String agentPassword) {
        Agent agent = agentService.findAgentByAgentLicenseNoAndAgentPassword(agentLicenseNo, agentPassword);
        if (agent != null) {
            Map<String, String> response = new HashMap<>();
            response.put("agentLicenseNo", agent.getAgentLicenseNo());
            response.put("agentName", agent.getAgentName());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
