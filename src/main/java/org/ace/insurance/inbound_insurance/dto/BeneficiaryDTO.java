package org.ace.insurance.inbound_insurance.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BeneficiaryDTO {
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
}
