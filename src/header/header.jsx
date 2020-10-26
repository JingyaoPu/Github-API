import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';
import {search} from '../redux/effects'
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline"
}
const Header = (props) => {
    const{
        search
    }=props
    return (
        <HeaderContainer>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" component={NavLink} exact to="/" activeStyle={activeStyle}>
                    Home
                </Link>
                <Link color="inherit" component={NavLink} to="/following" activeStyle={activeStyle}> Following </Link>
            </Breadcrumbs>
            <TextField
                id="search"
                label="Search..."
                //variant="outlined"
                onKeyUp={(event) => {
                    if (event.key == "Enter") {
                        search(event.target.value)
                    }
                }}></TextField>
            {/* <button onClick={()=>setShowRegister(true)}>register</button>  */}

        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    padding-left:5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3rem;
    width: 100%;
    font-size: 1.5em;
    color: rgba(0, 0, 0, 0.54);
    background-color: rgba(245,210,218);
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    z-index:10
`

export default connect(null, {search})(Header);