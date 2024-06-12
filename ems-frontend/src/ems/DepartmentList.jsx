import { useEffect, useState } from "react";
import { deleteDepartment, getAllDepartmentList } from "../service/DepartmentService";
import { useNavigate } from "react-router-dom";

const ListOfDepartment = ()=>{

    const [departmentList,setDepartmentList]=useState([])
    
    useEffect(()=>{getDepartmentList()},[])

function getDepartmentList(){
    getAllDepartmentList().then((Response)=>{
        setDepartmentList(Response.data)
    }).catch(
        (error)=>{console.log(error);}
    )
}

const navegate = useNavigate()

function addDepartments(){
    navegate("/add-Department")
}
function updateDepartment(id){
    navegate(`/edit-Department/${id}`)

}

function removeDepartment(id){
    deleteDepartment(id).then((Response)=>
        {
            getDepartmentList()
        }
    ).catch(err =>console.error(err))
}


    return (
        <div>
    <h1 className='text-center'>List Of Department</h1> 
    <button className="btn btn-success" onClick={addDepartments}>Add Department</button>
    <br/><br/>
    <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departmentList.map(dep =>
                           <tr key={dep.id}>
                            <td>{dep.id}</td>
                            <td>{dep.departmentName}</td>
                            <td>{dep.departmentDescription}</td>
                            <td><button className="btn btn-info" onClick={()=>{updateDepartment(dep.id)}}>Update</button>
                            <button className="btn btn-danger" style={{marginLeft:'12px'}} onClick={()=>{removeDepartment(dep.id)}}>Delete</button>
                            </td>
                           </tr>
                        
                        )
                    }
                </tbody>
            </table>
    </div>   
    )
}

export default ListOfDepartment;