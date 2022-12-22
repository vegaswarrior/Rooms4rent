import React from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";


const Tenant = ({Tenant}) => {
	return (

		<Card className="my-3 p-3 rounded" id="card">
			
              <Card.Body>
				<Link to={`/tenant/${tenant._id}`}>
					<Card.Title as="div">
						<strong>{tenant.name}</strong>
					</Card.Title>
				</Link>
                
				{/* <Card.Text as='h3'>${product.price}</Card.Text> */}
				<Card.Text as='h3'>Address:{tenant.address}</Card.Text>
				<Card.Text as='h3'>Room:{tenant.roomNum}</Card.Text>
				<Card.Text as='h3'>Bed:{tenant.bedNum}</Card.Text>
				<Card.Text as='h3'>Phone:{tenant.phone}</Card.Text>
				<Card.Text as='h3'>Beds:{tenant.email}</Card.Text>
				<Card.Text as='h3'>Email:{tenant.bedNum}</Card.Text>
		
			</Card.Body>
		</Card>
	);
};

export default Tenant;