import React from 'react'
import './swipebutton.scss'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';


function SwipeButton() {
  return (
    <>
    <div className='swipeButton'>
      <IconButton className='swipeButtonRepeat'>
    <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtonLeft'>
    <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtonStar'>
    <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtonRight'>
    <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtonLightning'>
    <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
    </>
  )
}

export default SwipeButton