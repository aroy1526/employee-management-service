import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './ems/EmployeeList'
import HeaderComponent from './ems/HeaderComponent'
import FooterComponent from './ems/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddEmployee from './ems/AddEmployee'
import ListOfDepartment from './ems/DepartmentList'
import { SaveDepartment } from './ems/AddDepartment'

function App() {


  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<EmployeeList/>}> </Route>
      <Route path='/employees' element={<EmployeeList/>}> </Route>
      <Route path='/add-employee' element={<AddEmployee/>}></Route>
      <Route path='/edit-employee/:id' element={<AddEmployee/>}></Route>
      <Route path='/departments' element={<ListOfDepartment/>}></Route>
      <Route path='/add-Department' element={<SaveDepartment/>}></Route>
      <Route path='/edit-Department/:id' element={<SaveDepartment/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
