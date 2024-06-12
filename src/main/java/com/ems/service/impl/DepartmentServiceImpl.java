package com.ems.service.impl;

import com.ems.dto.DepartmentDto;
import com.ems.entity.Department;
import com.ems.exception.RecordNotFoundException;
import com.ems.mapper.DepartmentMapper;
import com.ems.repository.DepartmentRepository;
import com.ems.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    DepartmentRepository departmentRepository;
    /**
     * @return
     */
    @Override
    public List<DepartmentDto> getDepartmentList() {
        return departmentRepository.findAll().stream().map(p-> DepartmentMapper.convertToDepartmentDto(p)).collect(Collectors.toList());
    }

    /**
     * @param id
     * @return
     */
    @Override
    public DepartmentDto getDepartmentById(Long id) {
        return departmentRepository.findById(id).map(p->DepartmentMapper.convertToDepartmentDto(p)).
                orElseThrow(()->new RecordNotFoundException("Department Not Found"+id));
    }

    /**
     * @param departmentDto
     * @return
     */
    @Override
    public DepartmentDto saveDepartment(DepartmentDto departmentDto) {
        return DepartmentMapper.convertToDepartmentDto(departmentRepository.save(DepartmentMapper.convertToDepartment(departmentDto)));
    }

    /**
     * @param departmentDto
     * @param departmentId
     * @return
     */
    @Override
    public DepartmentDto updateDepartment(DepartmentDto departmentDto, Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(()->
                new RecordNotFoundException("Department Not Found"+departmentId));
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        department.setDepartmentName(departmentDto.getDepartmentName());
        return DepartmentMapper.convertToDepartmentDto(departmentRepository.save(department));
    }

    /**
     * @param departmentId
     */
    @Override
    public void deleteDepartment(Long departmentId) {
         departmentRepository.findById(departmentId).orElseThrow(()->
                 new RecordNotFoundException("Department Not Found"+departmentId));
        departmentRepository.deleteById(departmentId);
    }
}
