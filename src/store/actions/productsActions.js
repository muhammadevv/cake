import { createAsyncThunk } from "@reduxjs/toolkit"
import Axios from "../../api"
import { menCollectionsList, productsFilter } from "../../utils/urls"

export const getProducts = createAsyncThunk('men-products', async (id) => {
  const res = await Axios.get(productsFilter(id))
  return res.data
})

export const getCollections = createAsyncThunk('collections', async () => {
  const res = await Axios.get(menCollectionsList)
  return res.data
})