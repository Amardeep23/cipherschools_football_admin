import React from 'react'
import './Topbar.css'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import profile_photo from '../../asset/img/profile_photo.jpg'

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"><SportsSoccerIcon style={{fontSize:'40px', marginTop:'5px'}}></SportsSoccerIcon></div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsIcon fontSize='medium' style={{fontSize:'30px'}} ></NotificationsIcon>
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon fontSize='medium' style={{fontSize:'30px'}} ></LanguageIcon>
                    
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon fontSize='medium' style={{fontSize:'30px'}} ></SettingsIcon>
                </div>
                <img src={profile_photo} alt="profile_photo" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
