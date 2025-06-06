import React from "react";
import Hero from "../components/layout/Hero";
import CollectionSection from "../products/CollectionSection";
import NewDonuts from "../products/NewDonuts";
import DetailsProduct from "../products/DetailsProduct";
import ProductGrid from "../products/ProductGrid";
import FeaturedCollection from "../products/FeaturedCollection";

const placeholderProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/Americano.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 2,
    name: "product 2",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20astd.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 3,
    name: "product 3",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20mixed.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 4,
    name: "product 4",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/group-6-astd.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 5,
    name: "product 5",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/Americano.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 6,
    name: "product 6",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20astd.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 7,
    name: "product 7",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20mixed.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 8,
    name: "product 8",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/group-6-astd.jpg",
        altText: "before",
      },
    ],
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <NewDonuts />

      <h2 className="text-3xl text-center fond-bold mb-4">G.O.A.T</h2>
      <DetailsProduct />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 capitalize">
          Topmost dawnuts for patay gutom
        </h2>
       
        
          <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
    </div>
  );
};

export default HomePage;
