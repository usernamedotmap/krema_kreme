const products = [
  {
    name: "Galaxy Glaze",
    description: "Chocolate donut with colorful sprinkles and icing",
    price: 30.0,
    discountPrice: 25.00,
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
        altText: "Galaxy Glaze",
      },
    ],
    rating: 4.5,
    numReviews: 12,
    tags: ["Donuts"],
  },
  {
    name: "Velvet Dust ",
    description: "Red Velvet donut with cream cheese filling and powdered sugar",
    price: 35.00,
    discountPrice: 30.00,
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
        altText: "Velvet Dust",
      },
     
    ],
    rating: 4.8,
    numReviews: 15,
    tags: ["Donuts"],
  },
  {
    name: "Cocoa Puff Bomb",
    description: "Chocolate-filled donut with sugar coating",
    price: 26.47,
    discountPrice: 25.00,
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
        altText: "Cocoa Puff Bomb",
      },
    ],
    rating: 4.2,
    numReviews: 7,
    tags: ["Donuts"],
  },
  {
    name: "Cheese Cloud Puff",
    description: "Donut with Cheesy filling and sugar on top",
    price: 22.99,
    discountPrice: 20.00,
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
        altText: "Cheese Puff Bomb",
      },
    ],
    rating: 4.0,
    numReviews: 4,
    tags: ["Donuts"],
  },
  {
    name: "Snowburst Ring",
    description: "Vanilla custard-filled donut with powdered sugar",
    price: 22.00,
    discountPrice: 19.00,
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
        altText: "Snowburst Ring",
      },
    ],
    rating: 4.0,
    numReviews: 5,
    tags: ["Donuts"],
  },
  {
    name: "Golden Glimmer",
    description: "Classic glazed donut with a soft, buttery taste.",
    price: 24.5,
    discountPrice: 21.00,
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
        altText: "Golden Grimmer",
      },
    ],
    rating: 4.1,
    numReviews: 8,
    tags: ["Donuts"],
  },
  {
    name: "Choco Fireworks",
    description: "Chocolate donut with icing drizzele and rainbow sprinkles",
    price: 35.00,
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
        altText: "Choco Fireworks",
      },
    ],
    rating: 4.9,
    numReviews: 15,
    tags: ["Donuts"],
  },
  {
    name: "Midnight Melt",
    description: "Dark chocolate donut with a rich, moist texture.",
    price: 30.00,
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
        altText: "Midnight Melt",
      },
    ],
    rating: 4.5,
    numReviews: 8,
    tags: ["Donuts"],
  },
  {
    name: "Pinky Party Splash",
    description: "Strawberry donut with pink glaze and sprinkles",
    price: 39.00,
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
        altText: "Pink Party Splash",
      },
    ],
    rating: 4.7,
    numReviews: 11,
    tags: ["Donuts"],
  },
  {
    name: "Rocky Crave Deluxe",
    description: "Chocolate donut with fudge, marshmallows, and nuts ",
    price: 36.00,
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
        altText: "Rocky Crave Deluxe",
      },
    ],
    rating: 4.6,
    numReviews: 9,
    tags: ["Donuts"],
  },
  {
    name: "Golden Honey Glaze",
    description: "Donut with sweet honey glaze and a fluffy texture. ",
    price: 42.8,
    discountPrice: 39.00,
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
        altText: "Golden Honey Glaze",
      },
    ],
    rating: 4.9,
    numReviews: 14,
    tags: ["Donuts"],
  },

  // COMBO
  {
    name: "Lattee creamy",
    description: "Latee drink wakey wakey ",
    price: 75.3,
    discountPrice: 70.99,
    sku: "LAT-DRI-002",
    category: "Combo",
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
    tags: ["Combo"],
  },
  {
    name: "Mango ice",
    description: "Fruit drink ",
    price: 71.8,
    discountPrice: 68.99,
    sku: "MAN-DRI-003",
    category: "Combo",
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
    tags: ["Combo"],
  },
  {
    name: "Frappee 2 shots",
    description: "Best Shot G-u-n",
    price: 80.50,
    discountPrice: 78.99,
    sku: "FRA-DRI-004",
    category: "Combo",
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
    tags: ["Combo"],
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

  // DRINKS

  {
    name: "Frozen Strawberry lemonade",
    description: "Our delightful frozen strawberry lemonade a perfect blend sweet strawberries and lemon",
    price: 120.00,
    discountPrice: 110.00,
    sku: "ASR-CMO-086",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 15 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/26.jpg",
        altText: "Frozen Strawberry lemonade",
      },
    ],
    rating: 4.8,
    numReviews: 60,
    tags: ["Drinks"],
  },

{
    name: "Frozen Original Lemonade",
    description: "Our classic frozen original lemonade: blended ice with lemon",
    price: 120.00,
    discountPrice: 115,
    sku: "ASR-CMO-087",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 15 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/23.jpg",
        altText: "Frozen Original Lemonade",
      },
    ],
    rating: 4.8,
    numReviews: 60,
    tags: ["Drinks"],
  },

{
    name: "Signature Kaffe Creme",
    description: "Our signature kaffe creme: a rich and creamy iced coffee with sweet cream",
    price: 120.00,
    discountPrice: 115,
    sku: "ASR-CMO-088",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 15 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/27.jpg",
        altText: "Signature kaffe Creme",
      },
    ],
    rating: 4.8,
    numReviews: 60,
    tags: ["Drinks"],
  },
{
    name: "Mocha Chill",
    description: "Our Mocha Chiil: Blended coffee mocha, topped with whipped cream and chocolate drizzles",
    price: 120.00,
    discountPrice: 115,
    sku: "ASR-CMO-089",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 15 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/24.jpg",
        altText: "Mocha Chill",
      },
    ],
    rating: 4.8,
    numReviews: 60,
    tags: ["Drinks"],
  },
{
    name: "Plain White",
    description: "A classic iced coffee with steamed milk",
    price: 120.00,
    discountPrice: 115,
    sku: "ASR-CMO-090",
    category: "Drinks",
    sizes: [
      { label: "S", additionalPrice: 0 },
      { label: "M", additionalPrice: 15 },
      { label: "L", additionalPrice: 30 },
    ],
    images: [
      {
        url: "/22.jpg",
        altText: "Plain White",
      },
    ],
    rating: 4.8,
    numReviews: 60,
    tags: ["Drinks"],
  },

];

export default products;
