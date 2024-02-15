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
public class InboundProposalDTO {

    private UUID id;
    private String passportNumber;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate passportIssuedDate;
    private String passportIssuedCountry;
    private boolean isChild;
    private String insuredPersonName;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate insuredPersonDOB;
    @Enumerated(EnumType.STRING)
    private Gender insuredPersonGender;
    private String insuredPersonPhoneNumber;
    private String insuredPersonEmail;
    private String insuredPersonAddressMyanmar;
    private String insuredPersonResidentAddress;
    private String insuredPersonResidentCountry;
    private String journeyFrom;
    private String journeyTo;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate estimateArrivalDate;
    private int coveragePlan;
    private String beneficiaryName;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate beneficiaryDOB;
    private String beneficiaryNRC;
    private String beneficiaryRelationship;
    private String beneficiaryPhoneNumber;
    private String beneficiaryEmail;
    private String beneficiaryResidentAddress;
    private String beneficiaryResidentCountry;
    private String childName;
    private String guardianName;
    private String childRelationship;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate childDOB;
    @Enumerated(EnumType.STRING)
    private Gender childGender;
    private UUID agentID;

}
