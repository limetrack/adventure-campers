import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteList: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.favoriteList = [...state.favoriteList, action.payload];
    },
    deleteFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        favoriteId => favoriteId !== action.payload
      );
    },
  },
});

export const { setFavorite, deleteFavorite } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites.favoriteList;

export default favoritesSlice.reducer;
