import { RateContext } from '@api/dataContext/fake';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserRateByUserId = createAsyncThunk(
  "userRateSlice/getUserRateByUserId",
  async (userId: string) => {
    const data = await RateContext.getUserRateByUserId({userId});
    return data;
  }
);
