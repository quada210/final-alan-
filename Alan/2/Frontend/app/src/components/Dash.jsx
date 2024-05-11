import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import image from './Image/image.png';
import logo from  './Image/logo.png';
import { Typography } from '@mui/material';


const Dash=()=>{
  const backgroundImageStyle={
    position:"fixed",
    top:'0',
    left:'0',
    width:"100%",
    height:"100%",
    zIndex: -1,
  };
  return(
    <>
    <img src={logo} alt='logo' style={{width:"150px",marginTop:""}} />
    <Typography style={{textAlign:"center"}} variant='h5'marginTop=""color="blue">"𝑺𝒂𝒗𝒐𝒓 𝒕𝒉𝒆 𝑺𝒆𝒂𝒔𝒐𝒏: 𝑰𝒏𝒅𝒖𝒍𝒈𝒆 𝒊𝒏 𝑶𝒖𝒓 𝑰𝒓𝒓𝒆𝒔𝒊𝒔𝒕𝒊𝒃𝒍𝒆 𝑺𝒑𝒆𝒄𝒊𝒂𝒍𝒔!"</Typography>
    {/* <h1 className='text-danger my-4'>weekenD Deal</h1> */}
    <h1 className="text-center text-error my-5">special offers</h1>
    <div>
    <img src={image} alt="err" style={backgroundImageStyle}/>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div class="card">
  <img src="https://whitefort-mandi.shop/wp-content/uploads/2023/10/642141078641c-scaled.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CHICKEN KUZHI MANDHI</h5>
    <p class="card-text">20% offer </p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
        </div>
        <div className="col-md-3">
        <div class="card">
  <img src="https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x500.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VEGETABLE HAKKA NOODLES</h5>
    <p class="card-text">25% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
<div className="col-md-3">
        <div class="card">
  <img src="https://imgmedia.lbb.in/media/2019/07/5d242ad8e93a896e5542da0d_1562651352251.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PIZZA</h5>
    <p class="card-text">50% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
<div className="col-md-3">
        <div class="card">
  <img src="https://i.pinimg.com/736x/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MYSORE MASALA DOSA</h5>
    <p class="card-text">50% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
&nbsp;&nbsp;&nbsp;
<div className="col-md-3">
        <div class="card">
  <img src="https://www.searafoodsme.com/wp-content/uploads/2022/07/IMG-20220704-WA0032-1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SEARA SHAWAYA CHICKEN</h5>
    <p class="card-text">40% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
<div className="col-md-3">
        <div class="card">
  <img src="https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2016/12/IMG_6780.jpg?ssl=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">FRIED RICE</h5>
    <p class="card-text">30% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
<div className="col-md-3">
        <div class="card">
  <img src="https://www.chefajaychopra.com/assets/img/recipe/1-1665986104ChickenLollipopwebp.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CHICKEN LOLLIPOP</h5>
    <p class="card-text">50% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
<div className="col-md-3">
        <div class="card">
  <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/16:9/w_3743,h_2105,c_limit/Smashburger-recipe-120219.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CHEESE BURGER</h5>
    <p class="card-text">40% OFFER</p>
    <a href="#" class="btn btn-primary">Learn more</a>
  </div>
</div>
</div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Dash;