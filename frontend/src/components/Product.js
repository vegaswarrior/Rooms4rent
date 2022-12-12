import React from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

import ProductCarousel from "./ProductCarousel";





const Product = ({product}) => {
	return (

		<Card className="my-3 p-3 rounded" id="card">
			<ProductCarousel imagesArr={product.images} link={`/product/${product._id}`} alt={product.name} />
              <Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
                
				<Card.Text as='h3'>${product.price}</Card.Text>
		
			</Card.Body>
		</Card>
	);
};

export default Product;
