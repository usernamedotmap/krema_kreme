const products = [
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look.",
    price: 39.99,
    discountPrice: 34.99,
    sku: "OX-SH-001",
    category: "Top Wear",
    sizes: ["S", "M", "L"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=39",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=40",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
    tags: ["Business Casual"],
  },
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events.",
    price: 29.99,
    discountPrice: 24.99,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    sizes: ["S", "M", "L"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=41",
        altText: "Slim-Fit Stretch Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=42",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
    tags: ["Formal Wear"],
  },
  {
    name: "Casual Denim Shirt",
    description: "This casual denim shirt is made from lightweight cotton denim.",
    price: 49.99,
    discountPrice: 44.99,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    sizes: ["S", "M", "L"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=43",
        altText: "Casual Denim Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=44",
        altText: "Casual Denim Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 8,
    tags: ["Casual Wear"],
  },
];

export default products;