package com.ems.mapper;

import com.ems.dto.EmployeeDto;
import com.ems.entity.Employee;

public class EmployeeMapper {

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFullName(),
                employeeDto.getEmail(),
                employeeDto.getPhoneNumber(),
                employeeDto.getCurrentOrganization()
        );
    }

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(employee.getId(),
                employee.getFullName(),
                employee.getEmail(),
                employee.getPhoneNumber(),
                employee.getCurrentOrganization()
        );
    }
}
