package com.ems.service.impl;

import com.ems.dto.EmployeeDto;
import com.ems.entity.Employee;
import com.ems.exception.RecordNotFoundException;
import com.ems.mapper.EmployeeMapper;
import com.ems.repository.EmployeeRepository;
import com.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    public EmployeeRepository employeeRepository;

    /**
     * @param employeeDto
     * @return
     */
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        return EmployeeMapper.mapToEmployeeDto(employeeRepository.save(EmployeeMapper.mapToEmployee(employeeDto)));
    }

    /**
     * @param employeeId
     * @return
     */
    @Override
    public EmployeeDto getEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new RecordNotFoundException("Employee Not Found " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    /**
     * @return
     */
    @Override
    public List<EmployeeDto> getAllEmployee() {
        return employeeRepository.findAll().stream().map(p -> EmployeeMapper.mapToEmployeeDto(p)).collect(Collectors.toList());
    }

    /**
     * @param employeeId
     * @param employeeDto
     * @return
     */
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto) {

        Employee employee = employeeRepository.findById(employeeId).
                orElseThrow(() -> new RecordNotFoundException("Employee not present for Update"));

        employee.setEmail(employeeDto.getEmail());
        employee.setFullName(employeeDto.getFullName());
        employee.setCurrentOrganization(employeeDto.getCurrentOrganization());
        employee.setPhoneNumber(employeeDto.getPhoneNumber());

        return EmployeeMapper.mapToEmployeeDto(employeeRepository.save(employee));
    }

    /**
     * @param employeeId
     */
    @Override
    public void deleteEmployee(Long employeeId) {

        employeeRepository.findById(employeeId).orElseThrow(() -> new RecordNotFoundException("Employee Not present for Delete "));

        employeeRepository.deleteById(employeeId);

    }
}
