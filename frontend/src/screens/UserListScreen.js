import React, {useEffect} from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Table, Button, Container, Col, Nav, Navbar, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {listUsers, deleteUser} from "../actions/userActions";
import Avatar from "../components/Avatar";

const UserListScreen = ({history}) => {
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const {loading, error, users} = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	const userDelete = useSelector((state) => state.userDelete);
	const {success: successDelete} = userDelete;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers());
		} else {
			history.push("/login");
		}
	}, [dispatch, history, successDelete, userInfo]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure")) {
			dispatch(deleteUser(id));
		}
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
            <LinkContainer  to="/admin/userlist">
              <Navbar.Brand className="admin_panel_link">Tenants</Navbar.Brand>
            </LinkContainer>
            <LinkContainer  to="/admin/userlist">
              <Navbar.Brand className="admin_panel_link">Quick Books</Navbar.Brand>
            </LinkContainer>
          </Nav>
            </Col>
            <Col md={10} className=" dashboard_col right_dash_col text-center">
			<Container>
			<h1>Users</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>AVATAR</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADMIN</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user._id}</td>
								<td>
									<Avatar url={user.avatar} size="40px" />
								</td>
								<td>{user.name}</td>
								<td>
									<a href={`mailto:${user.email}`}>{user.email}</a>
								</td>
								<td>
									{user.isAdmin ? (
										<i className="fas fa-check" style={{color: "green"}}></i>
									) : (
										<i className="fas fa-times" style={{color: "red"}}></i>
									)}
								</td>
								<td>
									<LinkContainer to={`/admin/user/${user._id}/edit`}>
										<Button variant="light" className="btn-sm">
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>
									<Button
										variant="danger"
										className="btn-sm"
										onClick={() => deleteHandler(user._id)}
									>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
			</Container>
			</Col>
        </Row>
      </Container>
		
		</>
	);
};

export default UserListScreen;
