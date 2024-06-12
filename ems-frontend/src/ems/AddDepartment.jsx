import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDepartment,getDepartmentById, updateDepartment } from "../service/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";

export const SaveDepartment=()=>{
const[departmentName,setDepartmentName]=useState('')
const[departmentDescription,setDepartmentDescription]=useState('')

const nav=useNavigate()

//userParam
const{id}=useParams()

    useEffect(()=>{
        getDepartmentById(id).then(
            (Response)=>{
                setDepartmentDescription(Response.data.departmentDescription)
                setDepartmentName(Response.data.departmentName)
            }
        ).catch(err=>console.error(err))
    },[id])

function saveOrUpdate(e){
    e.preventDefault()
    const dep ={departmentName,departmentDescription}
    console.log(dep)
    if(id){
        updateDepartment(id,dep).then(
            (Response)=>{console.log(Response.data)}
        ).catch(err=>{console.error(err)})
        nav("/departments")
    } else{
        addDepartment(dep).then((Response)=>{
            console.log(Response.data)
            nav("/departments")
        }
        ).catch((err)=>{console.log(err)})
    }
   
}

function pageTitle(){
    if(id){
return ( <h2 className='text-center'>Update Department</h2>)
    } else{
       return <h2 className='text-center'>Add Department</h2>
    }
}

    return(
<div className='container col-md-6 offset-md-3 offset-md-3'>
            <br/><br/>
            <div className='row'>
                <div className='card'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-lebel'>Department Name:</label>
                            <input type='text'
                            placeholder='Enter Department Name'
                            name='departmentName'
                            value={departmentName}
                            className="form-control"
                            onChange={(e)=>{setDepartmentName((e.target.value))}}/>            
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lebel'>Department Details</label>
                            <input type='text'
                            placeholder='Enter Department Name'
                            name='departmentDescription'
                            value={departmentDescription}
                            className="form-control"
                            onChange={(e)=>{setDepartmentDescription((e.target.value))}}/>            
                        </div>
                        <button className="btn-success btn" onClick={saveOrUpdate}>Submit</button>
                    </form>
                </div>

            </div>
            </div>
        </div>
)
}