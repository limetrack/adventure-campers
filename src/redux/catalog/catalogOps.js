import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../api/client';
import { DEFAULT_PAGE_SIZE } from '../../utils/constants';
import { convertFiltersToParams } from '../../utils/convertFiltersToParams';

export const fetchCatalog = createAsyncThunk(
  'catalog',
  async (_, { getState }) => {
    try {
      const { filters } = getState().filters;
      const { page } = getState().catalog;
      const filterParams = convertFiltersToParams(filters);

      const response = await apiClient.get('/campers', {
        params: { ...filterParams, page, limit: DEFAULT_PAGE_SIZE },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch campers');
    }
  }
);
