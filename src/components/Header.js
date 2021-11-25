import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import './Header.css'
export const Header = () => {
    return (
        <div className="header">
            <div className="header___left">
                <IconButton>
                    <MenuIcon color="primary" fontSize="large"/>
                </IconButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React.svg.png" />
                <p>React</p>
            </div>
            <div className="header__center">
               <h3>Home</h3>
               <h3>Main</h3>
               <h3>MoreInfo <span><ArrowDropDownIcon/></span></h3>
            </div>
            <div className="header__right">
                <form noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                </form>
                <Avatar/>
            </div>
        </div>
    )
}
