import React from 'react';

const ChildCard = props => {
    console.log(props);
    return (
        <div>
            <img src={props.image} />
            <div>{props.name}</div>
            <div>Username: {props.username}</div>
            <div>Location: {props.location}</div>
            <div>Followers: {props.followers}</div>
            <div>Following: {props.following}</div>

        </div>
    )
}

export default ChildCard;