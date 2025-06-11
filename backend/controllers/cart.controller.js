import Product from "../model/Product.js";
import Cart from "../model/CartItem.js";
import { getCart } from "../lib/getCart.js";

export const postCartProduct = async (req, res) => {
  try {
    const { productId, quantity, size, guestId, userId } = req.body;
    // dito hanapin niay yung product na pinili mo
    const product = await Product.findById(productId);

    // obvious naman kapag wala nag match syempre product not found
    if (!product)
      res.status(404).json({
        message: "Product not found",
      });

    // dito naman check niay kung meron na bang laman cart mo
    let cart = await getCart(userId, guestId);

    // kung meron kang cart check niya yung product na napili mo and size non
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId && p.size === size
      );

      //  dahil nga meron kang cart mag increase yung quantity pero kapag wala kang cart mag increase yun sa 1
      if (productIndex > -1) {
        cart.products[productIndex].quantity += Number(quantity);
      } else {
        cart.products.push({
          productId,
          name: product.name,
          images: product.images,
          price: product.price,
          size,
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
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            images: product.images,
            price: product.price,
            size,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
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
      (p) => p.productId.toString() === productId && p.size === size
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
  const { productId, size, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);

    if (!cart)
      return res.status(404).json({
        message: "Cart not found",
      });

    const productIndex = cart.products.findIndex(
      (p) => p.productId === productId && p.size === size
    );

    if (productIndex) {
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
    const userCart = await Cart.findOne({ user: req.user._id});

    // dito kapag yung hindi pa nakalogin is naglogin siya yung cart na nilagay niya is magsasama na kapag nakapag login na siya
    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({
          message: "Guest cart is empty",
        });
      }
      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex(
            (item) => item.productId.toString() === guestItem.productId.toString() && guestItem.size === item.size
          );

          if (productIndex > -1) {
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );

        await userCart.save();

        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.log("Error deleting guest cart: ", error);
        }
        res.status(200).json(userCart);
      } else {
        guestCart.user = req.user._id;

      guestCart.guestId = undefined;
      await guestCart.save();
      res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }
      res.status(400).json({
        message: "Guest cart not found"
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
