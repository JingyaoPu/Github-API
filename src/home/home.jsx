import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import User from '../user/user'
const UserContainer = styled.div`
    img{
        width:200px;
        height:200px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    background-color: rgba(245,210,218);
    box-shadow: 0 3px 5px 0px rgba(255, 105, 135, .3);
    height: 300px;`

const Home = (props) => {
    const {
        fetching,
        error,
        avatar_url,
        followers
    } = props
    return ( 
        <>
        {
            fetching? 
            <p>LOADING...</p>
            :error?
                <p>{error}</p> 
                :(avatar_url!==undefined && followers!==undefined)?
                        <UserContainer>
                            <User avatar_url={avatar_url} content={"followers: "+followers}/>
                        </UserContainer>:<p>No Data</p>
        }
        </>
    );
}


const mapStateToProps = (state)=>(
    {
        fetching:state.status.fetching,
        error:state.status.error,
        avatar_url:state.status.data?.avatar_url,
        followers: state.status.data?.followers
    }
)
export default connect(mapStateToProps,null)(Home);