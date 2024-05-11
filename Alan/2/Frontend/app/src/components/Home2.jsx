import React from 'react';
import Img from './Image/b.jpg';
import Typography from '@mui/material/Typography';

const Home2 = () => {
  const backgroundImage = {
    position: "fixed",
    left: '0',
    top: '0',
    height: "100%",
    width: "100%",
    zIndex: -1
  };

  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '80px' }}>
      <h1>Welcome to Our Restaurant!</h1>
      <p>Experience the finest dining experience in town at our restaurant. From exquisite dishes to delightful desserts, we have something for everyone.</p>
      <img src={Img} alt="Restaurant Interior" style={backgroundImage} />
      <Typography variant="h4" gutterBottom>
        Our Specialties
      </Typography><br /><br />
      <Typography variant="body1" paragraph style={{ padding: '10px' }}>
        Indulge in our signature dishes crafted by our expert chefs:
      </Typography><br /><br />
      <Typography variant="body1">
        <strong>Grilled Salmon with Lemon Butter Sauce</strong>
      </Typography><br /><br />
      <Typography variant="body1">
        <strong>Homemade Pasta with Truffle Cream Sauce</strong>
      </Typography><br /><br />
      <Typography variant="body1">
        <strong>Prime Rib Steak with Red Wine Reduction</strong>
      </Typography><br /><br />
      <Typography variant="h4" gutterBottom>
        Special Offers
      </Typography><br /><br />
      <Typography variant="body1" paragraph>
        Don't miss out on our current specials:
      </Typography><br /><br />
      <Typography variant="body1">
        Happy Hour: Enjoy discounted drinks every weekday from 4pm to 7pm.
      </Typography><br /><br />
      <Typography variant="body1">
        Weekend Brunch: Treat yourself to a delicious brunch buffet every Saturday and Sunday.
      </Typography><br /><br />
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography><br /><br />
      <Typography variant="body1" paragraph>
        For reservations or inquiries, please call <a href="tel:+1234567890">123-456-7890</a> or email <a href="mailto:mercato@gmail.com">mercato@gmail.com</a>.
      </Typography>
    </div>
  );
};

export default Home2;
