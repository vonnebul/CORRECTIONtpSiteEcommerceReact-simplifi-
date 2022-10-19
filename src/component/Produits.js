import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';

export default function Produits(props){
    return(
        <Container>
            <Row>
                {props.produits.map((produit) =>(
                <Col>
                    <Card style={{ width: '18rem', margin: '5px' }}>
                        <Card.Img variant="top" src={produit.img} />
                        <Card.Body>
                            <Card.Title>{produit.nom}</Card.Title>
                            <LinkContainer to={"/produit/"+produit.id}>
                                <Button variant="primary">Voir plus</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
                
            </Row>
        </Container>
    )
}