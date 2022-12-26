import React from "react";
import {Container, Row, Card} from "react-bootstrap";
import ProductCarousel from "./ProductCarousel";


const Product = ({product}) => {
	return (
		<>
		
  <Container className="mt-5">
	<Row>
	<div className="card mb-3" style={{maxWidth: "1000px", border: "none"}}>
				<div className="row g-0">
				<div className="col-md-4">
				    <ProductCarousel imagesArr={product.images} link={`/product/${product._id}`} alt={product.name} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
					  <Card.Text as='h3'><span className="product_span text-success">Address: </span>{product.address}</Card.Text>
				      <Card.Text as='h3'><span className="product_span text-success">Rooms: </span>{product.numRooms}</Card.Text>
				      <Card.Text as='h3'><span className="product_span text-success">Beds: </span>{product.numBeds}</Card.Text>
					</div>
				</div>
				</div>
				</div>
	</Row>
  </Container>

  <Container className="mt-5">
	<Row>
		<h5 className="text-center">Current Tenants</h5>
	</Row>
  </Container>
  </>

	);
};

export default Product;
