package org.ace.insurance.inbound_insurance.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "BENEFICIARY")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Beneficiary {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String beneficiaryName;
    private String beneficiaryNRC;
    private String beneficiaryRelationship;
    private String beneficiaryPhoneNumber;
    private String beneficiaryEmail;
    private String beneficiaryResidentAddress;
    private String beneficiaryResidentCountry;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate beneficiaryDOB;
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
