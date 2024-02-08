package org.ace.insurance.inbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.inbound_insurance.dto.ChildDTO;
import org.ace.insurance.inbound_insurance.entity.Child;
import org.ace.insurance.inbound_insurance.service.ChildService;
import org.ace.insurance.inbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.ace.insurance.inbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/child")
@Slf4j
@AllArgsConstructor
public class ChildController {
    private final ChildService childService;

    @PostMapping
    public ResponseEntity<HttpResponse<Child>> createChild(@RequestBody ChildDTO childDTO){
        Child child = childService.createChild(childDTO);
        return createResponse(child, HttpStatus.CREATED);
    }
}
