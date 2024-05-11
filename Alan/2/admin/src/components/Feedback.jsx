import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const Feedback = () => {
    const [user,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4040/get")
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
                        <TableCell>email</TableCell>
                        <TableCell>Feedback</TableCell>
                         <TableCell>Rating</TableCell>
                    </TableRow>
                </TableHead>
                {user.map(user=>{
                    return(
                        <TableRow>
                           
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.review}</TableCell>
                            <TableCell>{user.rating}</TableCell>

                        </TableRow>
                    )})}

            </Table>
         </TableContainer>
    
    </div>
  )
}
