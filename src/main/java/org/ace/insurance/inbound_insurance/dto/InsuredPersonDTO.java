package org.ace.insurance.inbound_insurance.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ace.insurance.inbound_insurance.enumeration.Gender;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InsuredPersonDTO {
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
    private LocalDate insuredPersonDOB;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate passportIssueDate;
    @Enumerated(EnumType.STRING)
    private Gender insuredPersonGender;
    private boolean isChild;
    private UUID beneficiaryID;
}
