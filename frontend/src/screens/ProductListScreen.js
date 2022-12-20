import React, {useEffect} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Table, Button, Row, Col, Container, Nav, Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import {listProducts, deleteProduct, createProduct} from "../actions/productActions";
import {PRODUCT_CREATE_RESET} from "../constants/productConstants";
import ProductCarousel from "../components/ProductCarousel";


const ProductListScreen = ({history, match}) => {
	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const {loading, error, products, page, pages} = productList;

	const productDelete = useSelector((state) => state.productDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete
	} = productDelete;

	const productCreate = useSelector((state) => state.productCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct
	} = productCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	useEffect(() => {
		dispatch({type: PRODUCT_CREATE_RESET});

		if (!userInfo || !userInfo.isAdmin) {
			history.push("/login");
		}

		if (successCreate) {
			history.push(`/admin/product/${createdProduct._id}/edit`);
		} else {
			dispatch(listProducts("", pageNumber));
		}
	}, [
		dispatch,
		history,
		userInfo,
		successDelete,
		successCreate,
		createdProduct,
		pageNumber
	]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure")) {
			dispatch(deleteProduct(id));
		}
	};

	const createProductHandler = () => {
		dispatch(createProduct());
	};

	
	return (
		<>
	<Container fluid>
        <Row>
            <Col md={2} className="dashboard_col left_dash_col">
                <h1 className='text-center'>Admin Panel</h1>
                <Nav className="me-auto" id="first_nav">
            <LinkContainer to="/admin/productlist">
              <Navbar.Brand className="admin_panel_link">Properties</Navbar.Brand>
            </LinkContainer>
            <LinkContainer  title={userInfo.name} to="/profile">
              <Navbar.Brand className="admin_panel_link">Profile</Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/admin/userlist">
              <Navbar.Brand className="admin_panel_link">Tentants</Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/admin/userlist">
              <Navbar.Brand className="admin_panel_link">Quick Books</Navbar.Brand>
            </LinkContainer>
          </Nav>
            </Col>
			<Col md={4}>
			    <ul>
					<li>Sandmist</li>
					<li>Snow Flower</li>
					<li>Living Desert</li>
					<li>Hialigha</li>
					<li>Lamont</li>
					<li>Flower House</li>
					<li>Craig</li>
					<li>Banbary</li>
					<li>Tropicana</li>
					<li>Sir David</li>
					<li>Sir Richard</li>
					<li>Hasset Home</li>
					<li>Melissa Home</li>
					<li>Palms Place</li>
				</ul>
			</Col>
            <Col md={6} className="dashboard_col right_dash_col text-center">
			<Container>
			<Row className="align-items-center">
				<Col>
					<h1>Properties</h1>
				</Col>
				<Col className="text-right">
					<Button className="my-3" onClick={createProductHandler}>
						<i className="fas fa-plus"></i> Create New Property
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
								<th>IMAGE</th>
								<th>NAME</th>
								<th>ADDRESS</th>
								<th>ROOMS</th>
								<th>BEDS</th>
								<th></th>
								
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product._id}>
									<td>
										<ProductCarousel imagesArr={product.images} alt={product.name} size={["200px", "200px"]} />
									</td>
									<td>{product.name}</td>
									<td>{product.address}</td>
									<td>{product.numRooms}</td>
									<td>{product.numRooms}</td>
									<td>
										<LinkContainer to={`/admin/product/${product._id}/edit`}>
											<Button variant="light" className="btn-sm">
												<i className="fas fa-edit"></i>
											</Button>
										</LinkContainer>
										<Button variant="danger" className="btn-sm" onClick={() => deleteHandler(product._id)} >
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

export default ProductListScreen;
