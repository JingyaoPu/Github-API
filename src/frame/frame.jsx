import React from 'react';
import Header from '../header/header'
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import Home from '../home/home';
import Following from '../Following/Following'
import './app.frame.css'

const Content = styled.div`
    position: absolute;
    width:100%;
    top:3rem;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    background-color: rgb(255, 255, 255);
`
const Frame = (props) => {
    let location = useLocation();
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Header></Header>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={200}
                >
                        <Content>
                            <Switch location={location}>
                                <Route path="/following" component={Following}/>
                                <Route path="/" component={Home} />
                            </Switch >
                        </Content>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default connect(null, null)(Frame);