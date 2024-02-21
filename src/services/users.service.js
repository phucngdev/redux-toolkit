import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../api/axios";

// function get all user
export const findAll = createAsyncThunk("user/findAll", async () => {
  try {
    // gọi api lấy dữ liệu
    const response = await baseUrl.get("users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// export const remove =
