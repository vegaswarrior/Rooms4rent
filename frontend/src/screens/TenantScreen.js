import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, ListGroup, Card, Button, Form} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {listTenantDetails} from "../actions/tenantActions";




const TenantScreen = ({history}) => {
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();

	const tenantDetails = useSelector((state) => state.tenantDetails);
	const {loading, error, tenant} = tenantDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	// useEffect(() => {
	// 	if (!tenant._id || tenant._id !== match.params.id) {
	// 		dispatch(listTenantDetails(match.params.id));
			
	// 	}
	// }, [dispatch, match, tenant]);

	return (
		<>
	
			<Button className="btn btn-light my-3" onClick={() => history.goBack()}>
				Go Back
			</Button>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Meta title={tenant.name} />
					<Row>
						<Col md={3}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h3>{tenant.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>Monthly Rent: ${tenant.rent}</ListGroup.Item>
								<ListGroup.Item>Room Number: ${tenant.roomNum}</ListGroup.Item>
								<ListGroup.Item>Bed Number: ${tenant.bedNum}</ListGroup.Item>
								<ListGroup.Item>Email:{tenant.email}</ListGroup.Item>
								<ListGroup.Item>Phone:{tenant.phone}</ListGroup.Item>

							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant="flush">
									<ListGroup.Item>
										<Row>
											<Col>Phone:</Col>
											<Col>
												<strong>${tenant.phone}</strong>
											</Col>
										</Row>
									</ListGroup.Item>

		
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						
					</Row>
				</>
			)}
		</>
	);
};

export default TenantScreen;
