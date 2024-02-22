package org.ace.insurance.inbound_insurance.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ace.insurance.inbound_insurance.entity.Agent;
import org.ace.insurance.inbound_insurance.entity.InsuredPerson;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InboundProposalReturnDTO {

    private UUID id;
    private String certificateID;
    private String journeyFrom;
    private String journeyTo;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate estimateArrivalDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate policyStartDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate policyEndDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate submittedDate;
    private int coveragePlan;
    private double premiumRate;
    private InsuredPerson insuredPerson;
    private Agent agent;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate childDOB;
    private String childName;
}

