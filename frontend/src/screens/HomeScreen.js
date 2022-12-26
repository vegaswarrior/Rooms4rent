import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
// import Product from '../components/Product'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import '../screens/css/homescreen.css'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
        <Container fluid className='hero_container'>
          <Row>
            <h1 className='text-center'>Las Vegas</h1>
            <h3 className='text-center'>Rooms For Rent</h3>
          </Row>
        </Container>

    </>
  )
}

export default HomeScreen
