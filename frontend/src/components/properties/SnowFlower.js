import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../Product";
import Message from "../Message";
import Loader from "../Loader";
import Paginate from "../Paginate";
import { listProducts } from "../../actions/productActions";
import Meta from "../Meta";

const SnowFlower = ({match}) => {
  const keyword = match.params.keyword;
  const category = "SnowFlower";

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, category));
  }, [dispatch, keyword, pageNumber]);

  return (
    <Container fluid className="properties_container">
      <Meta />
      <h1 className="latest_products text-center">Snow Flower</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (<Container>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={12} lg={12} xl={12}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} category={category} keyword={keyword ? keyword : ""} />
      </Container>)}


    </Container>)
}

export default SnowFlower