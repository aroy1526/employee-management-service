import axios from "axios";

export const getAllDepartmentList = () =>  axios.get('http://localhost:8080/api/department')
export const addDepartment = (department) =>axios.post('http://localhost:8080/api/department',department)
export const updateDepartment = (departmentId,department) =>axios.put('http://localhost:8080/api/department/update/'+departmentId,department)
export const getDepartmentById = (departmentId) =>axios.get('http://localhost:8080/api/department/'+departmentId)
export const deleteDepartment=(departmentId) => axios.delete('http://localhost:8080/api/department/'+departmentId)