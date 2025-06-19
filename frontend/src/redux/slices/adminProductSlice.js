import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async () => {
    const response = await axios.get(`${API_URL}/admin/products`, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData) => {
    const response = await axios.post(
      `${API_URL}/admin/products`,
      {
        productData,
      },
      {
        headers: {
          Authorization: USER_TOKEN,
        },
      }
    );
    return response.data;
  }
);

export const updateProducts = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${API_URL}/admin/products/${id}`,
      productData,
      {
        headers: {
          Authorization: USER_TOKEN,
        },
      }
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL}/admin/products/${id}`, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });
    return id;
  }
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== 1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      });
  },
});


export default adminProductSlice.reducer;