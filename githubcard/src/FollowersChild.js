import React from 'react';

const FollowersChild = props => {
    console.log(props);
    return (
        <div>
            <img src={props.image} alt ={props.username} />
            <div>Username: {props.username}</div>
        </div>
    )
}

export default FollowersChild;