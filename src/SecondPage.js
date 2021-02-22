import React from 'react';
import './SecondPage.css'
import { Container, Row, Col, Badge } from 'reactstrap';

const SecondPage = ({value, data}) => {

  
    
return(
<div className="inputSp">
<input className="input"  type="text" placeholder={value}/>
<div className="containerSecondPage"> 
    {data.map((photo, index) => {
        const tagData = photo.tags.find((elem) => {
            return elem.type === "search"
            })
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
                        <li><Badge color="secondary">{tagData ? tagData.title : 'no discription'}</Badge></li>
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
</div>
)

}

export default SecondPage;