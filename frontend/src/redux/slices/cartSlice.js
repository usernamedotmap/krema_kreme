import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../components/common/ExpiredToken";

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/cart/`, {
        params: { userId, guestId },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, size, guestId, userId },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post(`/cart`, {
        productId,
        quantity,
        size,
        guestId,
        userId,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatedCartItemQuantity = createAsyncThunk(
  "cart/UpdateCartItemQuantity",
  async (
    { productId, guestId, userId, size, quantity },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put(`/cart`, {
        guestId,
        userId,
        size,
        quantity,
        productId,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, guestId, userId, size }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/cart`, {
        method: "DELETE",
        data: {
          productId,
          guestId,
          userId,
          size,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, user }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `/cart/merge`,
        {
          guestId,
          user,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromStorage(),
    guestId: loadCartFromStorage()?.guestId || null,
    loading: false,
    error: null,
  },
  reducers: {
    // setGuestId: (state, action) => {
    //   state.guestId = action.payload;
    // },
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
    updateQuantity: (state, action) => {
      const { productId, size, quantity } = action.payload;

      const item = state.cart.products.find(
        (p) => p.productId === productId && p.size === size
      );

      if (item) {
        item.quantity = quantity;
        state.cart.totalPrice = state.cart.products.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );
        saveCartToStorage(state.cart);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
        console.log("action sa fetchCart: ", action.payload);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cart";
      })

      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add to cart";
      })
      .addCase(updatedCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatedCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.guestId = action.payload.guestId;
        saveCartToStorage(action.payload);
      })
      .addCase(updatedCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to updated quantity in cart";
      })

      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
        console.log(action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to remove item in cart";
      })
      .addCase(mergeCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mergeCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.guestId = null;
        saveCartToStorage(action.payload);
      })
      .addCase(mergeCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to merge cart";
      });
  },
});

export const { clearCart, setGuestId } = cartSlice.actions;
export default cartSlice.reducer;
