import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography, Button, TableBody, TextField } from '@mui/material';

export const Cart = () => {
    const [user, setUsers] = useState([]);
    const [quantities, setQuantities] = useState([]); // State to track quantities for each item
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        axios.get("http://localhost:4040/get5")
            .then(users => {
                setUsers(users.data);
                // Initialize quantities array with 1 for each item
                setQuantities(new Array(users.data.length).fill(1));
            })
            .catch(err => console.log(err));
    }, []);

    const validateEmail = (email) => {
        // Basic email validation regex pattern
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const addHandler = () => {
        if (!email || !validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        setEmailError('');

        const foodItems = user.map((item, index) => `${item.name}(${quantities[index]})`);
        const totalPrice = getTotalCartPrice();

        axios.post("http://localhost:4040/add6", {
            foodItems: foodItems,
            totalPrice: totalPrice,
            email: email // Add email to the request body
        })
            .then((result) => {
                alert(result.data);
            })
            .catch((err) => console.log(err));
    };
    
    const handleRemoveAllData = async () => {
        try {
            // Make a DELETE request to the backend API endpoint
            const response = await axios.delete('http://localhost:4040/removeAll');
            console.log(response.data); // Log the response message
        } catch (error) {
            console.error(error);
        }
    };
 

    const add = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index]++; // Increment quantity for the specific item index
        setQuantities(newQuantities);
    }

    const sub = (index) => {
        if (quantities[index] > 0) { // Ensure quantity doesn't go negative
            const newQuantities = [...quantities];
            newQuantities[index]--; // Decrement quantity for the specific item index
            setQuantities(newQuantities);
        }
    }

    const getTotalPrice = (index) => {
        return user[index].price * quantities[index];
    }

    const getTotalCartPrice = () => {
        let total = 0;
        for (let i = 0; i < user.length; i++) {
            total += getTotalPrice(i);
        }
        return total;
    }

    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of food</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>
                                        <Typography variant='h6'>qty={quantities[index]}</Typography>
                                        <Button variant="outlined" color='primary' onClick={() => add(index)}>+</Button>
                                        <Button variant="outlined" color='primary' onClick={() => sub(index)}>-</Button>
                                    </TableCell>
                                    <TableCell>{getTotalPrice(index)}</TableCell>
                                 
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant='h6'>Total price in Cart : {getTotalCartPrice()}</Typography>
            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                required
            />
            <br /><br />
            <Button variant="contained" onClick={() => { addHandler(); handleRemoveAllData(); }}>Place the Order</Button>
        </div>
    );
};
