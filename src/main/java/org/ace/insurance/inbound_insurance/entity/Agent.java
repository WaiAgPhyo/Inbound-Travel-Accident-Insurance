package org.ace.insurance.inbound_insurance.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "Agents")
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Agent {
    @Id
    @GeneratedValue (strategy = GenerationType.UUID)
    private UUID id;

    private String agentName;
    private String agentPassword;
    private String agentLicenseNo;

    private UUID createdUserID;
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
