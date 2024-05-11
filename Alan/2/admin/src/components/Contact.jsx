import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const Contact = () => {
    const [user,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4040/get7")
    .then(user => setUsers(user.data))
    .catch(err=> console.log(err))
  })
  return (
    <div>
        
        <br /><br /><br /><br /><br /><br />
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                         <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                {user.map(user=>{
                    return(
                        <TableRow>
                           
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.message}</TableCell>

                        </TableRow>
                    )})}

            </Table>
         </TableContainer>
    
    </div>
  )
}
