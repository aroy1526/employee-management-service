package com.ems.service;

import com.ems.dto.DepartmentDto;
import org.springframework.stereotype.Service;

import java.util.List;
public interface DepartmentService {
    List<DepartmentDto> getDepartmentList();
    DepartmentDto getDepartmentById(Long id);

    DepartmentDto saveDepartment(DepartmentDto departmentDto);
    DepartmentDto updateDepartment(DepartmentDto departmentDto, Long departmentId);
    void deleteDepartment(Long departmentId);
}
