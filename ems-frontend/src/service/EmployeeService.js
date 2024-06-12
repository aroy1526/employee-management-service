import axios from "axios"

export const listOfEmployee =()=>{
    return axios.get('http://localhost:8080/api/employee')
}

export const addEmployee = (employee)=>axios.post('http://localhost:8080/api/employee/save',employee)

export const getEmployee=(employeeId)=>axios.get('http://localhost:8080/api/employee/'+employeeId)
export const updateEmployee = (employeeId,employee) =>axios.put('http://localhost:8080/api/employee/'+employeeId,employee)
export const removeEmployee = (employeeId) =>axios.delete('http://localhost:8080/api/employee/'+employeeId)