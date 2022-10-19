import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Produit(props){
    let {id} = useParams();
    return(
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '95%', margin: '5px' }}>
                        <Card.Img variant="top" src={props.produits[id-1].img} />
                        <Card.Body>
                            <Card.Title>{props.produits[id-1].nom}</Card.Title>
                            <Card.Text>
                            {props.produits[id-1].desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row>
        </Container>
    )
}