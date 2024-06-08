package com.ems.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long id;
    @NotEmpty(message = "Full Name is Mandatory")
    private String fullName;
    @Email(message = "Please enter valid email")
    private String email;
    @NotEmpty(message = "Phone Number is Mandatory")
    private String phoneNumber;
    private String currentOrganization;
}
