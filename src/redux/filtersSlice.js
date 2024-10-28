import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;
export const selectFilters = state => state.filters.filters;

export default filtersSlice.reducer;
