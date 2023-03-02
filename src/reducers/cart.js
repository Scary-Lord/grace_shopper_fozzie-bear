import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCart = createAsyncThunk('cart/getCart',
  async (userId) => {
		try {
			const { data } = await axios.get(`/api/cart/${userId}`)
			return data
		} catch (err) {
			console.log(err)
		}
	}
)

export const addToCart = createAsyncThunk('cart/addToCart',
	async (product, userId) => {
		const { data } = await axios.put(`/api/cart/${userId}`, {product})
		return data
	}
)

export const removeFromCart = createAsyncThunk('cart/removeFromCart',
	async (product) => {
		const { data } = await axios.get(`/api/cart/${userId}`)
	}
)

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCart.fulfilled, (state, action) => {
			return action.payload
		})
		builder.addCase(addToCart.fulfilled, (state, action) => {
			state.push(action.payload)
		})
	}
})

export const selectCart = (state) => {
	return state.cart
}

export default cartSlice.reducer