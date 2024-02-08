package org.ace.insurance.inbound_insurance.service;

import org.ace.insurance.inbound_insurance.dto.ChildDTO;
import org.ace.insurance.inbound_insurance.entity.Child;

public interface ChildService {
    Child createChild(ChildDTO childDTO);
}
