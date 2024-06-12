import { useEffect, useState } from "react"
import { addEmployee, getEmployee, updateEmployee } from "../service/EmployeeService"
import { useNavigate, useParams } from "react-router-dom"

const AddEmployee = ()=>{

    const [fullName,setFullName]=useState('')
    const[email,SetEmail]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[currentOrganization,setCurrentOrganization] = useState('')

    const[emperror,setError] = useState({fullName:'',
            email:'',
            phoneNumber:'',
            currentOrganization:''
        })

    const navigate = useNavigate()


    function saveOrUpdate(e){
        e.preventDefault()
        if(empFormValidation()){
            const employee = {fullName,email,phoneNumber,currentOrganization}
            console.log(employee)
            if(id){
                updateEmployee(id,employee).then((Response)=>{console.log(Response.data)}).catch(err=>{console.error(err)})
                navigate('/employees')
            } else{
                addEmployee(employee).then((Response)=>{console.log(Response.data)}).catch(err=>{console.error(err)})
                navigate('/employees')
            }
        }
    }



    function empFormValidation(){
        let valid = true
        //spread operator 
        const errorCp = {... emperror}

        if(fullName.trim()){
            errorCp.fullName=''
        } else{
            errorCp.fullName='Employee Name is required'
            valid=false
        }
        if(email.trim()){
            errorCp.email=''
        } else{
            errorCp.email='Employee Email is required'
            valid=false
        }
        if(phoneNumber.trim()){
            errorCp.phoneNumber=''
        } else{
            errorCp.phoneNumber='Employee phone number is required'
            valid=false
        }     
        setError(errorCp)
        return valid
    }

//userParam
const{id}=useParams()

function pageTitle(){
    if(id){
return ( <h2 className='text-center'>Update Employee</h2>)
    } else{
       return <h2 className='text-center'>Add Employee</h2>
    }
}

useEffect(()=>{
getEmployee(id).then(Response=>{
    setFullName(Response.data.fullName)
    SetEmail(Response.data.email)
    setPhoneNumber(Response.data.phoneNumber)
    setCurrentOrganization(Response.data.currentOrganization)
}).catch(err=>{console.log(err)})

},[id])


    return(
        <div className='container col-md-6 offset-md-3 offset-md-3'>
            <br/><br/>
            <div className='row'>
                <div className='card'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-lebel'>Name:</label>
                            <input type='text'
                            placeholder='Enter Employee Full Name'
                            name='fullName'
                            value={fullName}
                            className={`form-control ${ emperror.fullName ? 'is-invalid': '' }`}
                            onChange={(e)=>{setFullName((e.target.value))}}/>            
                        </div>
                        {emperror.fullName && <p style={{ color: 'red' }}>{emperror.fullName}</p>}
                        <div className='form-group mb-2'>
                            <label className='form-lebel'>Email:</label>
                            <input type='text'
                            placeholder='Enter Employee Email'
                            name='email'
                            value={email}
                            className={`form-control ${emperror.email?'is-invalid':''}`}
                            onChange={(e)=>{SetEmail((e.target.value))}}/>            
                        </div>
                        {emperror.email && <p style={{ color: 'red' }}>{emperror.email}</p>}
                        <div className='form-group mb-2'>
                            <label className='form-lebel'>Phone Number:</label>
                            <input type='text'
                            placeholder='Enter Phone Number'
                            name='phoneNumber'
                            value={phoneNumber}
                            className={`form-control ${emperror.phoneNumber?'is-invalid':''}`}
                            onChange={(e)=>{setPhoneNumber((e.target.value))}}/>            
                        </div>
                        {emperror.phoneNumber && <p style={{ color: 'red' }}>{emperror.phoneNumber}</p>}
                        <div className='form-group mb-2'>
                            <label className='form-lebel'>Current Organization:</label>
                            <input type='text'
                            placeholder='Enter Current Organization'
                            name='currentOrganization'
                            value={currentOrganization}
                            className='form-control'
                            onChange={(e)=>{setCurrentOrganization((e.target.value))}}/>            
                        </div>
                        <button className="btn-success btn" onClick={saveOrUpdate}>Submit</button>
                    </form>
                </div>

            </div>
            </div>
        </div>
    )
}

export default AddEmployee