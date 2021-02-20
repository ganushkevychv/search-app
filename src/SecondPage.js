import React from 'react';
import './SecondPage.css'
import { Container, Row, Col, Badge } from 'reactstrap';

const SecondPage = ({data}) => {

  
    
return(

<div className="containerSecondPage">
    {data.map((photo, index) => {
        
        return (
    <div key={index}>
    <Container>
      <Row>
        <Col>
        <a href={photo.links.html}>
        <img src={photo.urls.small} alt={photo.alt_description} className="image"/>
        </a>
        <div className="badgeGroup">
          <ul>
        <li><Badge color="secondary">{photo.tags.length > 0 ? photo.tags[0].source.ancestry.category.pretty_slug : ''}</Badge></li>
        <li><Badge color="secondary">{photo.tags.length > 0 ? photo.tags[0].source.ancestry.type.pretty_slug : '' }</Badge></li>
        <li><Badge color="secondary">{photo.tags.length > 0 ? photo.tags[0].source.ancestry.subcategory.pretty_slug : '' }</Badge></li>
        </ul>
        </div>
        <p>Photo by {photo.user.name} on <a className="cardTitleLink" href="https://unsplash.com/">Unsplash</a></p>
        <a className="download" href={photo.links.download}><Badge color="danger">Download</Badge></a>
        </Col>
      </Row>
    </Container>
      
    </div>
        )
        
    })}
</div>
)

}

export default SecondPage;