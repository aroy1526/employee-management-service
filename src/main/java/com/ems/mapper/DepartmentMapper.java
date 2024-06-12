package com.ems.mapper;

import com.ems.dto.DepartmentDto;
import com.ems.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto convertToDepartmentDto(Department department){
        return new DepartmentDto(department.getId(),department.getDepartmentName(),department.getDepartmentDescription());
    }

    public static Department convertToDepartment(DepartmentDto departmentDto){
        return new Department(departmentDto.getId(),departmentDto.getDepartmentName(), departmentDto.getDepartmentDescription());
    }
}
