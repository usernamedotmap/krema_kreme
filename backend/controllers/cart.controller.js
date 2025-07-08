import Product from "../model/Product.js";
import Cart from "../model/CartItem.js";
import { getCart } from "../lib/getCart.js";
import mongoose from "mongoose";

export const postCartProduct = async (req, res) => {
  try {
    const { productId, quantity, size, guestId, userId } = req.body;
    // dito hanapin niay yung product na pinili mo
    const product = await Product.findById(productId);

    // obvious naman kapag wala nag match syempre product not found
    if (!product)
     return res.status(404).json({
        message: "Product not found",
      });

    // dito naman check niay kung meron na bang laman cart mo
    let cart = await getCart(userId, guestId);

    // kung meron kang cart check niya yung product na napili mo and size non
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId && p.size.label === (typeof size === "object" ? size.label : size)

      );

      //  dahil nga meron kang cart mag increase yung quantity pero kapag wala kang cart mag increase yun sa 1
      if (productIndex > -1) {
        cart.products[productIndex].quantity += Number(quantity);
      } else {
        const selectedSize = product.sizes.find(
          (s) => s.label === (typeof size === "object" ? size.label : size)
        );

        if (!selectedSize) {
          return res.status(400).json({ message: "Invalid size selection" });
        }

        const finalPrice = product.price + (selectedSize?.additionalPrice || 0);

        const sizeLabel = selectedSize.label;

        cart.products.push({
          productId,
          name: product.name,
          images: product.images,
          price: finalPrice,
          size: {
            label: sizeLabel,
            additionalPrice: selectedSize.additionalPrice || 0,
          },
          quantity,
        });
      }
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      const selectedSize = product.sizes.find(
        (s) => s.label === (typeof size === "object" ? size.label : size)
      );

      if (!selectedSize) {
        return res.status(400).json({ message: "Invalid size selection" });
      }

      const finalPrice = product.price + (selectedSize?.additionalPrice || 0);
      const sizeLabel = selectedSize.label;

      const newCart = await Cart.create({
        user: userId ? new mongoose.Types.ObjectId(userId) : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            images: product.images,
            price: finalPrice,
            size: {
              label: sizeLabel,
              additionalPrice: selectedSize.additionalPrice || 0,
            },
            quantity,
          },
        ],
        totalPrice: finalPrice * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const putCartProduct = async (req, res) => {
  const { quantity, productId, size, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);

    if (!cart)
      return res.status(404).json({
        message: "Cart not found",
      });

    const productIndex = cart.products.findIndex(
      (p) => p.productId.toString() === productId && p.size.label === size.label
    );

    if (productIndex > -1) {
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1);
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({
        message: "Product not foudn in the cart",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Interval Server Error",
    });
  }
};

export const deleteCartProduct = async (req, res) => {
  const { productId, guestId, userId, size } = req.body;

  try {
    let cart = await getCart(userId, guestId);

    if (!cart)
      return res.status(404).json({
        message: "Cart not found",
      });

    const productIndex = cart.products.findIndex(
      (p) => p.productId.toString() === productId && p.size.label === size.label
    );

    if (productIndex !== -1) {
      cart.products.splice(productIndex, 1);

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );

      await cart.save();

      return res.status(200).json(cart);
    } else {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Interval Server Error",
    });
  }
};

export const getCartProduct = async (req, res) => {
  const { userId, guestId } = req.query;

  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({
        message: "Cart not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const mergeCartProduct = async (req, res) => {
  const { guestId } = req.body;

  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({
          message: "Guest cart is empty",
        });
      }

      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex((item) => 
            item.productId.toString() === guestItem.productId.toString() &&
              item.size.label === guestItem.size.label
          );

          if (productIndex > -1) {
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        await userCart.save();

        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.log("Error deleting guest cart:", error);
        }
        res.status(200).json({
          message: "Merge Succeess",
          userCart,
        });
      } else {
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        await guestCart.save();

        res.status(200).json({
          message: "guest cartt to the user successfully",
          guestCart,
        });
      }
    } else {
      if (userCart) {
        return res.status(200).json({
          message: "guestId already merge to userId",
          userCart,
        });
      }
      res.status(404).json({
        message: "Guest cart not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// export const mergeCartProduct = async (req, res) => {
//   const { guestId } = req.body;

//   try {
//     const guestCart = await Cart.findOne({ guestId });
//     const userCart = await Cart.findOne({ user: req.user._id });

//     // dito kapag yung hindi pa nakalogin is naglogin siya yung cart na nilagay niya is magsasama na kapag nakapag login na siya
//     if (guestCart && guestCart.products.length === 0) {
//       if (userCart) {
//         // Merge guestCart into userCart
//         guestCart.products.forEach((guestItem) => {
//           const productIndex = userCart.products.findIndex(
//             (item) =>
//               item.productId.toString() === guestItem.productId.toString() &&
//               guestItem.size.label === item.size.label
//           );

//           if (productIndex > -1) {
//             userCart.products[productIndex].quantity += guestItem.quantity;
//           } else {
//             userCart.products.push(guestItem);
//           }
//         });

//         userCart.totalPrice = userCart.products.reduce(
//           (acc, item) => acc + item.quantity * item.price,
//           0
//         );

//         await userCart.save();
//         await Cart.findOneAndDelete({ guestId }).catch((err) =>
//           console.log("Error deleting guest cart: ", err)
//         );

//         return res.status(200).json(userCart);
//       } else {
//         // Transfer guest cart to user
//         guestCart.user = req.user._id;
//         guestCart.guestId = undefined;
//         await guestCart.save();
//         return res.status(200).json(guestCart);
//       }
//     }

//     // fallback handling
//     if (!guestCart || guestCart.products.length === 0) {
//       if (userCart) {
//         return res.status(200).json(userCart);
//       }

//       // Optional: auto-generate a new guest cart or return an empty cart object
//       return res.status(200).json({
//         products: [],
//         guestId: guestId || `guest_${Date.now()}`,
//         message: "No cart data found. A new cart may be initialized.",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Internal Server Error",
//     });
//   }
// };

// export const mergeCartProduct = async (req, res) => {
//   const { guestId } = req.body;

//   try {
//     if (!guestId) {
//       return res.status(400).json({ message: "Missing guestId" });
//     }

//     const guestCart = await Cart.findOne({ guestId });
//     const userCart = await Cart.findOne({ user: req.user._id });

//     // Merge only if the guestCart exists and has products
//     if (guestCart && guestCart.products.length > 0) {
//       if (userCart) {
//         guestCart.products.forEach((guestItem) => {
//           const existingIndex = userCart.products.findIndex(
//             (item) =>
//               item.productId.toString() === guestItem.productId.toString() &&
//               guestItem.size.label === item.size.label
//           );

//           if (existingIndex > -1) {
//             userCart.products[existingIndex].quantity += guestItem.quantity;
//           } else {
//             userCart.products.push(guestItem);
//           }
//         });

//         userCart.totalPrice = userCart.products.reduce(
//           (acc, item) => acc + item.quantity * item.price,
//           0
//         );

//         await userCart.save();
//         await Cart.deleteOne({ guestId });

//         return res.status(200).json(userCart);
//       } else {
//         // If the user doesn’t have a cart, assign guest cart to user
//         guestCart.user = req.user._id;
//         guestCart.guestId = undefined;
//         await guestCart.save();
//         return res.status(200).json(guestCart);
//       }
//     }

//     // If guestCart is missing or empty
//     if (!guestCart || guestCart.products.length === 0) {
//       if (userCart) {
//         return res.status(200).json(userCart);
//       }

//       return res.status(200).json({
//         products: [],
//         message: "Cart not found",
//       });
//     }
//   } catch (err) {
//     console.error("Merge cart failed:", err);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };
