import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCatalog } from './catalogOps';
import { DEFAULT_PAGE_SIZE } from '../../utils/constants';

const initialState = {
  isLoading: false,
  list: [],
  page: 1,
  total: 0,
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

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    resetState: (state, action) => {
      state.list = [];
      state.error = null;
      if (action.payload) {
        state.page = 1;
      }
    },
    setNextPage: (state, action) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = [...state.list, ...action.payload.items];
        state.total = action.payload.total;
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const selectCatalog = state => state.catalog.list;
export const selectPage = state => state.catalog.page;
export const selectTotal = state => state.catalog.total;
export const selectLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;

export const selectIsNextPageAvailable = createSelector(
  [selectPage, selectTotal],
  (page, total) => page * DEFAULT_PAGE_SIZE < total
);

export const { resetState, setNextPage } = catalogSlice.actions;

export default catalogSlice.reducer;
