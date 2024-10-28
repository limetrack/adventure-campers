import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../api/client';

export const fetchCamperInfo = createAsyncThunk(
  'camper',
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.get(`/campers/${id}`);
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch camper');
    }
  }
);
