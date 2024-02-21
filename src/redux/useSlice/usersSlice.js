import { createSlice } from "@reduxjs/toolkit";
import { findAll } from "../../services/users.service";
const initialState = {
  date: [],
  status: "idle",
  error: null,
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAll.pending, (state) => {
        // state tượng chưng cho initialState
        state.status = "Pending"; // trả về trạng thái chờ
      })
      .addCase(findAll.fulfilled, (state, action) => {
        // state tượng chưng cho initialState
        state.status = "Successfully"; // trả về trạng thái thành công
        state.data = action.payload; // gán lại giá trị api cho giá trị khởi tạo
      })
      .addCase(findAll.rejected, (state, action) => {
        // state tượng chưng cho initialState
        state.status = "Failed"; // trả về trạng thái thất bại
        state.error = action.error.message; // lấy ra nội dung lỗi
      });
  },
});

export default usersSlice.reducer;
