import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {listTenantDetails, updateTenant} from "../actions/tenantActions";
import {TENANT_UPDATE_RESET} from "../constants/tenantConstants";


const TenantEditScreen = ({match, history}) => {
	const tenantId = match.params.id;

	const [name, setName] = useState("");
	const [roomNum, setRoomNum] = useState(0);
	const [bedNum, setBedNum] = useState(0);
	const [rent, setRent] = useState(0);
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState(0);
	const [notes, setNotes] = useState("");
	const [email_1, setEmail_1] = useState("");
	// const [property, setProperty] = useState("");

	const dispatch = useDispatch();

	const tenantDetails = useSelector((state) => state.tenantDetails);
	const {loading, error, tenant} = tenantDetails;

	const tenantUpdate = useSelector((state) => state.tenantUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate
	} = tenantUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({type: TENANT_UPDATE_RESET});
			history.push("/admin/tenantlist");
		} else {
			if (!tenant.name || tenant._id !== tenantId) {
				dispatch(listTenantDetails(tenantId));
			} else {
				setName(tenant.name);
				setRoomNum(tenant.roomNum);
				setBedNum(tenant.bedNum);
				setRent(tenant.rent);
				setAddress(tenant.address);
				setPhone(tenant.phone);
				setNotes(tenant.notes);
				setEmail_1(tenant.email_1);
				// setProperty(tenant.property);

			}
		}
	}, [dispatch, history, tenantId, tenant, successUpdate]);


	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateTenant({
				_id: tenantId,
				name,
				address,
				rent,
				roomNum,
				bedNum,
                phone,
				notes,
				email_1,
			})
		);
	};

	return (
		<>
			<Link to="/admin/tenantlist" className="btn btn-light my-3">
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit Tenant</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Name Of Tenant</Form.Label>
							<Form.Control type="name" placeholder="Tenant Name" value={name} onChange={(e) => setName(e.target.value)} ></Form.Control>
						</Form.Group>

						<Form.Group controlId="address">
							<Form.Label>Address</Form.Label>
							<Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} ></Form.Control>
						</Form.Group>
						<Form.Group controlId="roomNum">
							<Form.Label>Room Number</Form.Label>
							<Form.Control type="number" placeholder="Room Number" value={roomNum} onChange={(e) => setRoomNum(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="bedNum">
							<Form.Label>Bed Number</Form.Label>
							<Form.Control type="number" placeholder="Bed Number" value={bedNum} onChange={(e) => setBedNum(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="phone">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="rent">
							<Form.Label>Montly Rent</Form.Label>
							<Form.Control type="number" placeholder="Monthly Rent" value={rent} onChange={(e) => setRent(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="email_1">
							<Form.Label>Montly Rent</Form.Label>
							<Form.Control type="email" placeholder="Email" value={email_1} onChange={(e) => setEmail_1(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="notes">
							<Form.Label>Notes</Form.Label>
							<Form.Control type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)}></Form.Control>	
						</Form.Group>
						{/* <Form.Group controlId="property">
							<Form.Label>Property</Form.Label>
							<Form.Control type="text" placeholder="Property" value={property} onChange={(e) => setProperty(e.target.value)}></Form.Control>	
						</Form.Group> */}
				

                         
						<Button type="submit" variant="primary">
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default TenantEditScreen;