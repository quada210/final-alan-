import { Card, Typography } from '@mui/material';
import React from 'react';
import img from './Image/rest.jpg';

export const Home = () => {
    const cardContainerStyle = {
        position: 'absolute',
        top: '50%', // Position at the vertical center
        left: '50%', // Position at the horizontal center
        transform: 'translate(-50%, -50%)', // Center horizontally and vertically
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
        padding: '40px',
        borderRadius: '10px',
        width: '80%', // Set width to match the background image
        maxHeight: '80vh', // Limit maximum height to fit within the viewport
        overflow: 'auto', // Enable scroll for excess content
    };

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <img src={img} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
            <br />
            <Typography variant='h3' style={{ color: 'white' }}>Welcome to Mercato</Typography>
            <div style={cardContainerStyle}>
                <Card style={{ backgroundColor: 'transparent' }}>
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>"A restaurant is a fantasy—a kind of living fantasy in which diners are the most important members of the cast."</Typography>
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>- Warner LeRoy</Typography>
                    <br />
                    <Typography variant='h4' align='center' style={{ color: 'white' }}>RESTAURANT HOURS</Typography>
                    <br />
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>Dine-in:</Typography><br />
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>Sun - Wed 11:30am - 9:00pm</Typography><br />
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>Thurs 11:30am - 9:30pm</Typography><br />
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>Fri - Sat 11:30 AM - 10:00</Typography>
                    <Typography variant='h5' fontStyle='bold' align='center' style={{ color: 'white' }}>Pala, Kottayam</Typography><br />
                    <Typography variant='h6' align='center' style={{ color: 'white' }}>Mercato is unlike any other restaurant in the city. We prepare each dish from scratch with ingredients fresh from our Market, boast an Italian-only wine list, and immerse guests in our traditions with our open-concept kitchen. Chat with the chef, raise a glass with other diners—when you eat at Mercato, you’re family.</Typography>
                </Card>
            </div>
        </div>
    );
};
