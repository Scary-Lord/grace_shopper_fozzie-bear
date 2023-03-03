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
	async ({ userId, product }) => {
		try {
			// generate random userId for guest checkout
			if(!userId){
				userId = Math.floor(Math.random() * 10000000)
			}
			const { data } = await axios.put(`/api/cart/${userId}/${product}`)
			return data
		} catch (err) {
			console.log(err)
		}
	}
)

export const removeFromCart = createAsyncThunk('cart/removeFromCart',
	async ({ userId, product }) => {
		try {
			const { data } = await axios.delete(`/api/cart/${userId}/${product}`)
			return data
		} catch (err) {
			console.log(err)
		}
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
		builder.addCase(removeFromCart.fulfilled, (state, action) => {
			return state
		})
	}
})

export const selectCart = (state) => {
	return state.cart
}

export default cartSlice.reducer