import React, {useEffect} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Table, Button, Row, Col, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import {listTenants, deleteTenant, createTenant} from "../actions/tenantActions";
import {TENANT_CREATE_RESET} from "../constants/tenantConstants";
// import ProductCarousel from "../components/ProductCarousel";


const TenantListScreen = ({history, match}) => {
	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const tenantList = useSelector((state) => state.tenantList);
	const { loading, error, tenants, page, pages} = tenantList;

	const tenantDelete = useSelector((state) => state.tenantDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete
	} = tenantDelete;

	const tenantCreate = useSelector((state) => state.tenantCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		tenant: createdTenant
	} = tenantCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	useEffect(() => {
		dispatch({type: TENANT_CREATE_RESET});

		if (!userInfo || !userInfo.isAdmin) {
			history.push("/login");
		}

		if (successCreate) {
			history.push(`/admin/tenant/${createdTenant._id}/edit`);
		} else {
			dispatch(listTenants("", pageNumber));
		}
	}, [
		dispatch,
		history,
		userInfo,
		successDelete,
		successCreate,
		createdTenant,
		pageNumber
	]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure")) {
			dispatch(deleteTenant(id));
		}
	};

	const createTenantHandler = () => {
		dispatch(createTenant());
	};

	
	return (
		<>
	<Container fluid>
        <Row>
   

            <Col md={12} className="dashboard_col right_dash_col text-center">
			<Container>
			<Row className="align-items-center">
				<Col>
					<h1>Tenants</h1>
				</Col>
				<Col className="text-right">
					<Button className="my-3" onClick={createTenantHandler}>
						<i className="fas fa-plus"></i> Create New Tenant
					</Button>
				</Col>
			</Row>
			{loadingDelete && <Loader />}
			{errorDelete && <Message variant="danger">{errorDelete}</Message>}
			{loadingCreate && <Loader />}
			{errorCreate && <Message variant="danger">{errorCreate}</Message>}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Table striped bordered hover responsive className="table-sm">
						<thead>
							<tr>
								<th>NAME</th>
								<th>PROPERTY</th>
								<th>ROOM</th>
								<th>BED</th>
								<th>PHONE</th>

								
							</tr>
						</thead>
						<tbody>
							{tenants.map((tenant) => (
								<tr key={tenant._id}>
									<td>{tenant.name}</td>
									<td>{tenant.address}</td>
									<td>{tenant.roomNum}</td>
									<td>{tenant.bedNum}</td>
									<td>{tenant.phone}</td>
									<td>
										<LinkContainer to={`/admin/tenant/${tenant._id}/edit`}>
											<Button variant="light" className="btn-sm">
												<i className="fas fa-edit"></i>
											</Button>
										</LinkContainer>
										<Button variant="danger" className="btn-sm" onClick={() => deleteHandler(tenant._id)} >
											<i className="fas fa-trash"></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Paginate pages={pages} page={page} isAdmin={true} />
				</>
			)}
			</Container>
			</Col>
        </Row>
      </Container>
           
		</>
	);
};

export default TenantListScreen;
