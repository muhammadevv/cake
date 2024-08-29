import { createSlice } from "@reduxjs/toolkit"
import { buildBuilder } from "../../utils/helpers"
import { getBannerList, getCategoryList, getDiscountList, getMenCollectionsList, getSetsList } from "../actions/homeActions"

const initialState = {
  banner: {
    list: [],
    loading: false
  },
  category: {
    list: [],
    loading: false
  },
  discount: {
    list: [],
    loading: false
  },
  sets: {
    list: [],
    loading: false
  },
  collections: {
    list: [],
    loading: false
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    buildBuilder(builder, getBannerList, 'banner')
    buildBuilder(builder, getCategoryList, 'category')
    buildBuilder(builder, getDiscountList, 'discount')
    buildBuilder(builder, getSetsList, 'sets')
    buildBuilder(builder, getMenCollectionsList, 'collections')
  }
})

export default homeSlice.reducer