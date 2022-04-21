import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "Liked",
  initialState: {
    product: [],
  },

  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    removeProduct:(state,action)=>{
      const newProduct= state.product.filter(
        (item)=>item.val.id !== action.payload.val.id
      )
      state.product=newProduct
    }
  },
});
export const { addProduct ,removeProduct} = likedSlice.actions;
export default likedSlice.reducer;
