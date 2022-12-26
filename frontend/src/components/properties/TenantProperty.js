import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Tenant from "../Tenant";
import Message from "../Message";
import Loader from "../Loader";
import Paginate from "../Paginate";
import { listTenants } from "../../actions/tenantActions";
import Meta from "../Meta";


const SnowFlower = ({match}) => {
  const keyword = match.params.keyword;
  const category = "Snow Flower";

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const tenantList = useSelector((state) => state.tenantList);
  const { loading, error, tenants, page, pages } = tenantList;

  useEffect(() => {
    dispatch(listTenants(keyword, pageNumber, category));
  }, [dispatch, keyword, pageNumber]);

  return (
    <Container fluid className="featured_products_container">
      <Meta />
      <h1 className="latest_products text-center">Snow Flower</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (<Container>
        <Row>
          {tenants.map((tenant) => (
            <Col key={tenant._id} sm={12} md={12} lg={12} xl={12}>
              <Tenant tenant={tenant} />
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} category={category} keyword={keyword ? keyword : ""} />
      </Container>)}


    </Container>)
}

export default SnowFlower