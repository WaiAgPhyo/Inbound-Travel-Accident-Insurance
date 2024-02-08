package org.ace.insurance.inbound_insurance.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ace.insurance.inbound_insurance.enumeration.Gender;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "INSURED_PERSON")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InsuredPerson {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String insuredPersonName;
    private String insuredPersonPhoneNumber;
    private String insuredPersonEmail;
    private String insuredPersonAddressMyanmar;
    private String insuredPersonResidentAddress;
    private String insuredPersonResidentCountry;
    private String passportNumber;
    private String passportIssuedCountry;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate passportIssueDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate insuredPersonDOB;
    @Enumerated(EnumType.STRING)
    private Gender insuredPersonGender;
    private boolean isChild;
    @OneToOne
    private Beneficiary beneficiaryID;
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
