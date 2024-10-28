import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperInfo } from './camperOps';

const initialState = {
  isLoading: false,
  camperInfo: null,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const camperInfoSlice = createSlice({
  name: 'camperInfo',
  initialState,
  reducers: {
    resetState: (state, action) => {
      state.camperInfo = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperInfo.pending, handlePending)
      .addCase(fetchCamperInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camperInfo = action.payload;
      })
      .addCase(fetchCamperInfo.rejected, handleRejected)
  },
});

export const selectCamperInfo = state => state.camperInfo.camperInfo;
export const selectLoading = state => state.camperInfo.isLoading;
export const selectError = state => state.camperInfo.error;

export const { resetState } = camperInfoSlice.actions;

export default camperInfoSlice.reducer;
