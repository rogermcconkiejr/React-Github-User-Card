import React from 'react';
import { Card, Image } from 'semantic-ui-react'


// const FollowersChild = props => {
    
//     return (
//         <div>
//             <img src={props.image} alt ={props.username} />
//             <h1>Username: {props.username}</h1>
//         </div>
//     )
// }


const FollowersChild = (props) => {
    console.log(props);
    return (
        <div>
        <Card>
            <Image src={props.image} alt={props.name} wrapped ui ={false}/>
          <Card.Content>
            <Card.Header><h1>{props.username}</h1></Card.Header>
          </Card.Content>
        </Card>
        </div>
    )
    
}
export default FollowersChild;