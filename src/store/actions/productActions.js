import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { productWithSlug } from "../../utils/urls";

export const productGet = createAsyncThunk('product/get', async (slug) => {
  let response = await Axios.get(productWithSlug(slug))
  return response.data
})