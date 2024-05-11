import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = () => {
    axios.post("http://localhost:4040/add7", inputs)
      .then((result) => {
        alert(result.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Feel free to reach out to us via email, phone, or by filling out the contact form below.</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
        
        <div style={{ flex: '1', marginLeft: '30px' }}>
          <h3>Visit Us</h3>
          <p>Pala, Kottayam, India</p>
          {/* Optionally, you can embed a map here */}
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
      
        {/* Contact form can be added here */}
        <form style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <input type="text" placeholder="Your Name" name='name' value={inputs.name} onChange={inputHandler} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input type="email" placeholder="Your Email" name='email' value={inputs.email} onChange={inputHandler} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea placeholder="Your Message" name='message' value={inputs.message} onChange={inputHandler} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} rows="5"></textarea>
          </div>
          <button type="submit" onClick={addHandler} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h3>Find Us on Map</h3>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactUs;
