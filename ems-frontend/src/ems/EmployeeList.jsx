import React,{ useEffect, useState } from "react"
import { listOfEmployee, removeEmployee } from "../service/EmployeeService"
import { useNavigate } from "react-router-dom"

const EmployeeList = () =>{

  const [employeeList, setEmployeeList]= useState([])

  useEffect(()=>{
    getEmployee()
  },[])
function getEmployee(){
    listOfEmployee().then((Response)=>{
        setEmployeeList(Response.data)
    }).catch(
        (error)=>{console.error(error);}
    )
}
//For navigate
const navigate = useNavigate()
  function addEmployee(){
    navigate('/add-employee')
  }
  function UpdateEmployee(id){
    navigate(`/edit-employee/${id}`)
  }

  function deleteEmployee(id){
    console.log(id)
    removeEmployee(id).then((Response)=>
        getEmployee()
    ).catch(err=>{console.error(err)})
  }

    return(

        <div>
            <h1 className='text-center'>List of Employee</h1>
            <button className="btn btn-success" onClick={addEmployee}>Add Employee</button>
            <br/><br/>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Full Name</th>
                        <th>Employee Email</th>
                        <th>Employee Phone Number</th>
                        <th>Employee Current Organization</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeList.map(emp =>
                           <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.fullName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phoneNumber}</td>
                            <td>{emp.currentOrganization}</td>
                            <td><button className="btn btn-info" onClick={()=>{UpdateEmployee(emp.id)}}>Update</button>
                            <button className="btn btn-danger" onClick={()=>{deleteEmployee(emp.id)}} style={{marginLeft:'12px'}}>Delete</button>
                            </td>
                           </tr>
                        
                        )
                    }
                </tbody>
            </table>
        </div>

    )

}

export default EmployeeList