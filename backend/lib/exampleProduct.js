const products = [
  {
    name: "Springkle shimmering",
    description: "This classic Donut can make u melt.",
    price: 30.0,
    discountPrice: 25.99,
    sku: "SPR-DON-001",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 10 },
      { label: "L", additionalPrice: 15 },
    ],
    images: [
      {
        url: "/11.png",
        altText: "Springkle shimmering",
      },
    ],
    rating: 4.5,
    numReviews: 12,
    tags: ["Donuts"],
  },
  {
    name: "Red Velvet",
    description: "A talented donut like a kpop group",
    price: 33.5,
    discountPrice: 30.99,
    sku: "RED-DON-002",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 12 },
      { label: "L", additionalPrice: 17 },
    ],
    images: [
      {
        url: "/12.png",
        altText: "Red Velvet",
      },
     
    ],
    rating: 4.8,
    numReviews: 15,
    tags: ["Donuts"],
  },
  {
    name: "Chocnig donut",
    description: "Black donut that make  u dark",
    price: 26.47,
    discountPrice: 23.99,
    sku: "CHO-DON-003",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 7 },
      { label: "L", additionalPrice: 11 },
    ],
    images: [
      {
        url: "/13.png",
        altText: "Chocnig donut",
      },
    ],
    rating: 4.2,
    numReviews: 7,
    tags: ["Donuts"],
  },
  {
    name: "Cheeezyy uck donut",
    description: "Yellowish donut filling same as urine",
    price: 22.99,
    discountPrice: 19.5,
    sku: "CHE-DON-004",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/14.png",
        altText: "Cheeezyy uck donut",
      },
    ],
    rating: 4.0,
    numReviews: 4,
    tags: ["Donuts"],
  },
  {
    name: "Creaamyy maja cheez",
    description: "Delicacy donut",
    price: 22.99,
    discountPrice: 19.5,
    sku: "CRE-DON-005",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/15.png",
        altText: "Creaamyy maja cheez",
      },
    ],
    rating: 4.0,
    numReviews: 5,
    tags: ["Donuts"],
  },
  {
    name: "litchi cream plant",
    description: "Cliche donut",
    price: 24.5,
    discountPrice: 21.5,
    sku: "LIT-DON-006",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/16.png",
        altText: "litchi cream plant",
      },
    ],
    rating: 4.1,
    numReviews: 8,
    tags: ["Donuts"],
  },
  {
    name: "Springle choklet syrup",
    description: "Jaguar pattern stripes",
    price: 35.99,
    discountPrice: 36.7,
    sku: "SPR-DON-007",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/17.png",
        altText: "Springle choklet syrup",
      },
    ],
    rating: 4.9,
    numReviews: 15,
    tags: ["Donuts"],
  },
  {
    name: "Blacky cream stick",
    description: "Pure Chocolate Donut",
    price: 30.2,
    discountPrice: 28.7,
    sku: "BLA-DON-008",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/18.png",
        altText: "Blacky cream stick",
      },
    ],
    rating: 4.5,
    numReviews: 8,
    tags: ["Donuts"],
  },
  {
    name: "Strawberry rainy springkle",
    description: "Strawberry & Cigarettes they always taste like u",
    price: 39.99,
    discountPrice: 37.5,
    sku: "STR-DON-009",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/19.png",
        altText: "Strawberry rainy springkle",
      },
    ],
    rating: 4.7,
    numReviews: 11,
    tags: ["Donuts"],
  },
  {
    name: "Chucky road chocolate",
    description: "Chocolate Classic rocky roll ",
    price: 36.99,
    discountPrice: 34.2,
    sku: "CHU-DON-010",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/20.png",
        altText: "Chucky road chocolate",
      },
    ],
    rating: 4.6,
    numReviews: 9,
    tags: ["Donuts"],
  },
  {
    name: "Muffle creamiest",
    description: "Cake Style Donut ",
    price: 42.8,
    discountPrice: 39.99,
    sku: "MUF-DON-011",
    category: "Donuts",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 20 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/21.png",
        altText: "Muffle creamiest",
      },
    ],
    rating: 4.9,
    numReviews: 14,
    tags: ["Donuts"],
  },

  // DRINKS
  {
    name: "Lattee creamy",
    description: "Latee drink wakey wakey ",
    price: 75.3,
    discountPrice: 70.99,
    sku: "LAT-DRI-002",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 30 },
      { label: "L", additionalPrice: 40 },
    ],
    images: [
      {
        url: "/2.png",
        altText: "Lattee creamy",
      },
    ],
    rating: 4.6,
    numReviews: 18,
    tags: ["Drinks"],
  },
  {
    name: "Mango ice",
    description: "Fruit drink ",
    price: 71.8,
    discountPrice: 68.99,
    sku: "MAN-DRI-003",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 30 },
      { label: "L", additionalPrice: 40 },
    ],
    images: [
      {
        url: "/3.png",
        altText: "Mango ice",
      },
    ],
    rating: 4.2,
    numReviews: 10,
    tags: ["Drinks"],
  },
  {
    name: "Frappee 2 shots",
    description: "Best Shot G-u-n",
    price: 80.50,
    discountPrice: 78.99,
    sku: "FRA-DRI-004",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 30 },
      { label: "L", additionalPrice: 40 },
    ],
    images: [
      {
        url: "/4.png",
        altText: "Frappee 2 shots",
      },
    ],
    rating: 4.9,
    numReviews: 30,
    tags: ["Drinks"],
  },

  // COMBO
  {
    name: "Original Doughnuts",
    description: "Classic Original O.A.T. SMALL: 6, MEDIUM: 9: LARGE: 12 ",
    price: 300.50,
    discountPrice: 298.99,
    sku: "ORI-CMO-005",
    category: "Combo",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 150 },
      { label: "L", additionalPrice: 200 },
    ],
    images: [
      {
        url: "/5.png",
        altText: "Original Doughnuts",
      },
    ],
    rating: 4.8,
    numReviews: 43,
    tags: ["Combo"],
  },
  {
    name: "Assorted Doughnuts",
    description: "Classic Assorted O.A.T. SMALL: 6, MEDIUM: 9: LARGE: 12 ",
    price: 400.50,
    discountPrice: 398.99,
    sku: "ASR-CMO-006",
    category: "Combo",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 170 },
      { label: "L", additionalPrice: 210 },
    ],
    images: [
      {
        url: "/6.png",
        altText: "Assorted Doughnuts",
      },
    ],
    rating: 4.8,
    numReviews: 51,
    tags: ["Combo"],
  },
  {
    name: "Assorted Doughnuts with drinks",
    description: "Classic Assorted O.A.T with 3 variants of drinks. SMALL: 6, MEDIUM: 9: LARGE: 12 ",
    price: 450.99,
    discountPrice: 430.99,
    sku: "ASR-CMO-007",
    category: "Combo",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 155 },
      { label: "L", additionalPrice: 230 },
    ],
    images: [
      {
        url: "/7.png",
        altText: "Assorted Doughnuts with drinks",
      },
    ],
    rating: 4.7,
    numReviews: 42,
    tags: ["Combo"],
  },
  {
    name: "2 Original Doughnuts with drinks",
    description: "2 Box Classic Original O.A.T with 4 variants of drinks. SMALL: 6, MEDIUM: 9: LARGE: 12 ",
    price: 800.00,
    discountPrice: 850.99,
    sku: "ORI-CMO-008",
    category: "Combo",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 300 },
      { label: "L", additionalPrice: 500 },
    ],
    images: [
      {
        url: "/8.png",
        altText: "2 Original Doughnuts with drinks",
      },
    ],
    rating: 4.8,
    numReviews: 62,
    tags: ["Combo"],
  },
  {
    name: "Original & Assorted Doughnuts with drinks",
    description: "Each Box of Classic Original & Classis Assorted O.A.T with 4 variants of drinks. SMALL: 6, MEDIUM: 9: LARGE: 12 ",
    price: 1000.99,
    discountPrice: 999.99,
    sku: "OSR-CMO-009",
    category: "Combo",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 500 },
      { label: "L", additionalPrice: 700 },
    ],
    images: [
      {
        url: "/9.png",
        altText: "Original & Assorted Doughnuts with drinks",
      },
    ],
    rating: 4.6,
    numReviews: 57,
    tags: ["Combo"],
  },
  {
    name: "2 Assorted Doughnuts with drinks",
    description: "2 Box Assorted Original O.A.T with 4 variants of drinks. SMALL: 6, MEDIUM: 9: LARGE: 12",
    price: 950.50,
    discountPrice: 945.99,
    sku: "ASR-CMO-010",
    category: "Combo",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 300 },
      { label: "L", additionalPrice: 500 },
    ],
    images: [
      {
        url: "/10.png",
        altText: "2 Assorted Doughnuts with drinks",
      },
    ],
    rating: 4.8,
    numReviews: 60,
    tags: ["Combo"],
  },



];

export default products;
