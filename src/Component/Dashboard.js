import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import env from '../environment'
import axios from "axios"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Dashboard=()=>{
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const loadData=async()=>{
        let token=sessionStorage.getItem('token')
        if(token){

            let res=await axios.get(`${env.apiurl}/users`,{
                headers:{"Authorization":`Bearer ${token}`}
            })
            if(res.data.statusCode===200){
                setData(res.data.data)
            }
            else{
                alert(res.data.message)
                navigate('/login')
            }
        }
        else{

            alert('token not found')
            navigate('/login')
        }

    }
    useEffect(()=>{
        loadData()

    },[])
    return <>
    <div className="login-wrapper">
        <h1>Welcome to App</h1>
        <p>Login to continue</p>
        
    </div>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e,i)=>{
            return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td>{e.createdAt}</td>
            </tr>

        })}
      </tbody>
    </Table>
    <Button variant="primary" onClick={()=>loadData()}>Refresh</Button>
    </div>
    </>
}
export default Dashboard