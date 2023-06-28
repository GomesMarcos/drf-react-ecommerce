import React from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

import Rating from '../components/Rating';

import products from '../products';

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id)
  return (
    <div>
      <Link to="/" className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col key={product._id} md={6}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Price: ${product.price}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Description: ${product.description}</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'In' : 'Out of'} Stock</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' disabled={!!(product.countInStock < 1)} type='button'>Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
