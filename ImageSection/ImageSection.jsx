import React from 'react'
import {Grid,Stack,Box} from '@mui/material';
import Button from '@mui/material/Button';
import "./ImageSection.css";
import akshaya from "./Images/akshaya.png";
import diwali from "./Images/diwali.jpg";
import dhanteras from "./Images/dhanteras.jpg";

function ImageSection() {
  return (
    <div>
    <Box sx={{ width: '100%',marginTop:"77px",marginBottom:"24px",marginRight:"18px" }} >
    <Stack direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
    alignItems="center">
  <Grid Item className="gift" ><h1 style={{fontSize: "4.5rem"}}>Looking For the <br/> Perfect Gift?</h1>
  <p className="para" style={{fontSize:"2rem"}}>Login into your account by entering the <br/> details</p>
  <Button variant="contained" size="small" sx={{textTransform:"capitalize",marginTop: "34px",width: "160px",
  height: "39px"}}>View Products</Button>
</Grid>
  <Grid Item>
  <img className='akshaya' src={akshaya} alt="Hola" />
   </Grid>
</Stack></Box>


<Box sx={{ width: '100%' }}>
<Stack direction={{ xs: 'column', sm: 'row' }}
spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
alignItems="center">
  <Grid Item><img className='diwali' src={diwali} alt="Hola" />
  </Grid>
  <Grid Item><img className='dhanteras' src={dhanteras} alt="Hola" />
  </Grid>
 
</Stack>
</Box>
    
  
    </div>
  )
}

export default ImageSection