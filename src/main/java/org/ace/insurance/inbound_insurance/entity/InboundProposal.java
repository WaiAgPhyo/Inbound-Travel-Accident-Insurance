package org.ace.insurance.inbound_insurance.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "INBOUND_PROPOSAL")
@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InboundProposal {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
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
    @ManyToOne
    private InsuredPerson insuredPerson;
    @ManyToOne
    private Agent agent;
    private UUID createdUserId;
    private LocalDateTime createdDate;
    private UUID updatedUserId;
    private LocalDateTime updatedDate;
    @Version
    private Long version;

    @PrePersist
    protected void onCreate(){
        createdDate = LocalDateTime.now();
        version = 1L;
    }

    @PreUpdate
    protected void onUpdate(){
        updatedDate = LocalDateTime.now();
        version++;
    }
}
