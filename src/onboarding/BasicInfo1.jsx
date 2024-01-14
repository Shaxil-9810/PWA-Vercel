import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const BasicInfo1 = ({proceedToNextStep}) => {
  return (
    <div className=''>
        <Box
            sx={{
              width: "28rem",
              height: "34rem",
              marginLeft: "6rem",
              borderRadius: "15px",
              backgroundColor: "white",
              padding:"2rem"
            }}
          >
            <div>
                <Typography className='text-4xl text-[#252A48] font-bold' >Basic Info</Typography>
                <Typography className="mt-2">Please add your basic info below</Typography>
            </div>
            <div className='mt-8'>
                <TextField fullWidth placeholder='First Name' ></TextField>
                <TextField fullWidth placeholder='Last Name' className='mt-3'></TextField>
                <TextField fullWidth placeholder='Email Adress' className='mt-3'></TextField>
                <TextField fullWidth placeholder='Password' className='mt-3'></TextField>
                <TextField fullWidth placeholder='Confirm Password' className='mt-3'></TextField>

            </div>
            <div>
                <Button variant='contained' className='bg-[#252A48]  mt-4' size='large' onClick={proceedToNextStep}>Next</Button>
            </div>
          </Box>
    </div>
  )
}

export default BasicInfo1