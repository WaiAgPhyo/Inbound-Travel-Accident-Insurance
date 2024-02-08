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

@Table(name = "CHILD")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Child{

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String childName;
    private String guardianName;
    private String childRelationship;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate childDOB;
    @Enumerated(EnumType.STRING)
    private Gender childGender;
    @ManyToOne
    private InsuredPerson insuredPersonID;
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
