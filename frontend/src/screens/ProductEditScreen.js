import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {listProductDetails, updateProduct} from "../actions/productActions";
import {PRODUCT_UPDATE_RESET} from "../constants/productConstants";
import EditProductImageGallery from "./EditProductImageGallery";

const ProductEditScreen = ({match, history}) => {
	const productId = match.params.id;

	const [name, setName] = useState("");
	const [numRooms, setNumRooms] = useState(0);
	const [numBeds, setNumBeds] = useState(0);
	const [price, setPrice] = useState(0);
	const [address, setAddress] = useState("");
	const [images, setImages] = useState([]);
	const [brand, setBrand] = useState("");
	const [category, setCategory] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [description, setDescription] = useState("");
	const [uploading, setUploading] = useState(false);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const {loading, error, product} = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate
	} = productUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({type: PRODUCT_UPDATE_RESET});
			history.push("/admin/productlist");
		} else {
			if (!product.name || product._id !== productId) {
				dispatch(listProductDetails(productId));
			} else {
				setName(product.name);
				setNumRooms(product.numRooms);
				setNumBeds(product.numBeds);
				setPrice(product.price);
				setImages(product.images);
				setAddress(product.address);
				setBrand(product.brand);
				setCategory(product.category);
				setCountInStock(product.countInStock);
				setDescription(product.description);
			}
		}
	}, [dispatch, history, productId, product, successUpdate]);

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("image", file);
		setUploading(true);

		try {
			const config = {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			};

			const {data} = await axios.post("/api/upload", formData, config);

			setImages((prev) => [...prev, data]);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};


	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProduct({
				_id: productId,
				name,
				address,
				price,
				numRooms,
				numBeds,
				images: images,
				brand,
				category,
				description,
				countInStock
			})
		);
	};

	return (
		<>

			<Link to="/admin/productlist" className="btn btn-light my-3">
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit Product</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Propery Nick Name</Form.Label>
							<Form.Control type="name" placeholder="Enter Property Nickname" value={name} onChange={(e) => setName(e.target.value)} ></Form.Control>
						</Form.Group>

						<Form.Group controlId="price">
							<Form.Label>Address</Form.Label>
							<Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} ></Form.Control>
						</Form.Group>

						<Form.Group controlId="image">
							<Form.Label>Image</Form.Label>
							<EditProductImageGallery imageArr={images} setImages={setImages} />
							<Form.File id="image-file" label="Add New Image"custom onChange={uploadFileHandler} ></Form.File>
							{uploading && <Loader />}
						</Form.Group>


						<Form.Group controlId="numRooms">
							<Form.Label>Number Of Rooms</Form.Label>
							<Form.Control type="number" placeholder="Enter Number Of Rooms" value={numRooms} onChange={(e) => setNumRooms(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="numBeds">
							<Form.Label>Number Of Beds</Form.Label>
							<Form.Control type="number" placeholder="Enter Number Of Rooms" value={numBeds} onChange={(e) => setNumBeds(e.target.value)}></Form.Control>	
						</Form.Group>
						<Form.Group controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>	
						</Form.Group>


						<Button type="submit" variant="primary">
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default ProductEditScreen;
