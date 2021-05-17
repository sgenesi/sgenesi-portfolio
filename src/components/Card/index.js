import React from 'react';
import ProjectList from '../ProjectList';


function FriendCard({ name, image, description,}) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={name} src={image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>App Name:</strong> {name}
            </li>
            <li>
              <strong>Description:</strong> {description}
            </li>
            <li>
              <strong>App</strong> {props.location}
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span>
      </div>
    );
  }
  
export default FriendCard;
  
  
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>