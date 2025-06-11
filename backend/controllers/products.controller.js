import Product from "../model/Product.js";

export const postProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      sizes,
      category,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      sizes,
      category,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
      user: req.user._id,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const putProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      sizes,
      category,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.sizes = sizes || product.sizes;
      product.category = category || product.category;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.sku = sku || product.sku;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.discountPrice = discountPrice || product.discountPrice;

      const updatedProduct = await product.save();

      res.json(updatedProduct);
    } else {
      res.status(401).json({ message: "Product not exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (product) {
      await product.deleteOne();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getProductWithFilter = async (req, res) => {
  try {
    const { collection, minPrice, maxPrice, sortBy, search, limit, category } =
      req.query;

    let query = {};

    if (collection && collection.toLowerCase() !== "all") {
      query.collections = collection;
    }

    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceHighToLow":
          sort = { price: -1 };
          break;
        case "priceLowToHigh":
          sort = { price: 1 };
          break;
        case "popular":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // hirap naman nito

    let products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const bestSellerProducts = async (req, res) => {
  try {
    const bestSeller = await Product.findOne().sort({ rating: -1 });

    if (bestSeller) {
      res.json(bestSeller);
    } else {
      res.status(404).json({
        message: "best seller not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const newArrivalProducts = async (req, res) => {

  try {
    const newArrivals = await Product.find().sort({createdAt: -1}).limit(8);
    res.json(newArrivals)
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Internal Server Error"})
  }
}

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Product Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
