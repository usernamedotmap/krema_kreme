import React from "react";
import Hero from "../components/layout/Hero";
import CollectionSection from "../products/CollectionSection";
import NewDonuts from "../products/NewDonuts";
import DetailsProduct from "../products/DetailsProduct";
import ProductGrid from "../products/ProductGrid";
import FeaturedCollection from "../products/FeaturedCollection";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProductByFilters } from "../redux/slices/productSlice";
import api from "../components/common/ExpiredToken";
import Footer from "../components/common/Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const [bestDonutsProduct, setBestDonutsProduct] = useState([]);

  useEffect(() => {
    dispatch(
      fetchProductByFilters({
        category: "Top Wear",
        limit: 8,
      })
    );
    const fetchBestProducts = async () => {
      try {
        const response = await api.get(`/products/best-seller`);
        setBestDonutsProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestProducts();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      {/* <CollectionSection /> */}
      {/* <NewDonuts /> */}

      {/* <h2 className="text-3xl text-center fond-bold mb-4">G.O.A.T</h2>
     {bestDonutsProduct ? ( <DetailsProduct productId={bestDonutsProduct._id} />) : (
      <p>Loading best product ...</p>
     ) } */}

      {/* <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 capitalize">
          Topmost dawnuts for patay gutom
        </h2> 

      </div> */}
      {/* <ProductGrid products={products} loading={loading} error={error} /> */}

      {/* <FeaturedCollection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
