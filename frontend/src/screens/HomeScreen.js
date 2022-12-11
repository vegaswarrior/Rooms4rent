import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

const HomeScreen = ({match}) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const {loading, error, products, page, pages} = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
      <Hero />
	  <About />
	  <Features />
	  <Pricing />


		</>
	);
};

export default HomeScreen;
