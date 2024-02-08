package org.ace.insurance.inbound_insurance.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CountryDTO {
    private UUID id;
    private String countryName;
    private String countryCode;
    private String shortCountryName;

}
