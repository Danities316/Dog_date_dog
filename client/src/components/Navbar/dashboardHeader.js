import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './dashboardHeader.scss';
import logo from '../../images/logo_tin.png'

function dashboardHeader() {
  return (
    <>
    <div className='d_header'>
      <IconButton>
    <PersonIcon fontSize='large' className = 'header_icon' />
     </IconButton>

    <img
    className='header_logo'
    src={logo}
    alt='App logo'
    />
     <IconButton>
     <ForumIcon fontSize='large' className = 'header_icon'/>
     </IconButton>
    </div>
    </>
  )
}

export default dashboardHeader