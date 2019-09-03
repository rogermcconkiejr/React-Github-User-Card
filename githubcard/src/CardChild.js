import React from 'react';
import { Card, Image } from 'semantic-ui-react'


const ChildCard = (props) => {
    console.log(props);
    return (
        <div className = "cardWrapper">
        <Card>
            <Image src={props.image} alt={props.name} wrapped ui ={false}/>
            <Card.Content>
            <Card.Header><h1>{props.name}</h1></Card.Header>
            <Card.Meta><h3>Username: {props.username}</h3></Card.Meta>
            <Card.Description><h5>Location: {props.location}</h5></Card.Description>
            <Card.Description><h5>Followers: {props.followers}</h5></Card.Description>
            <Card.Description><h5>Following: {props.following}</h5></Card.Description>
            </Card.Content>
        </Card>
        </div>
    )
}

export default ChildCard;