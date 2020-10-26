import React from 'react';

const User = (props) => {
    const {
        avatar_url,
        content
    } = props
    return ( 
        <>
            <img src={avatar_url}/>
            <p>{content}</p> 
        </>
    );
}
 
export default User;