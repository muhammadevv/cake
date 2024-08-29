import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { bannerList, categoryList, discountList, menCollectionsList, menProductsList, setsList } from "../../utils/urls";

export const getBannerList = createAsyncThunk('banner', async () => {
  let response = await Axios.get(bannerList)
  return response.data
})

export const getCategoryList = createAsyncThunk('category', async () => {
  let response = await Axios.get(categoryList)
  return response.data
})

export const getDiscountList = createAsyncThunk('discount', async () => {
  let response = await Axios.get(discountList)
  return response.data
})

export const getSetsList = createAsyncThunk('sets', async () => {
  let response = await Axios.get(setsList)
  return response.data
})

export const getMenCollectionsList = createAsyncThunk('menCollections', async () => {
  let response = await Axios.get(menCollectionsList)
  return response.data
})

export const getProductsList = createAsyncThunk('men-products', async () => {
  let response = await Axios.get(menProductsList)
  return response.data
})

export const postProductsList = createAsyncThunk('men-products', async () => {
  let response = await Axios.post(menProductsList)
  return response.data
})