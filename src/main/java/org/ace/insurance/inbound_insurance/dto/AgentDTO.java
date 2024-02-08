package org.ace.insurance.inbound_insurance.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AgentDTO {
    private String agentName;
    private String agentPassword;
    private String agentLicenseNo;
}
