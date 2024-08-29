import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../actions/productsActions"
import { buildBuilder } from "../../utils/helpers"
import { getMenCollectionsList } from "../actions/homeActions"

const initialState = {
  products: {
    list: [],
    loading: false
  },
  collections: {
    list: [],
    loading: false
  },
}

const ProductsSlice = createSlice({
  name: 'menProducts',
  initialState,
  extraReducers: (builder) => {
    buildBuilder(builder, getProducts, 'products')
    buildBuilder(builder, getMenCollectionsList, 'collections')
  }
})

export default ProductsSlice.reducer