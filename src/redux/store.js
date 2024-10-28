import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from './catalog/catalogSlice';
import camperInfoReducer from './camper/camperSlice';
import favoritesReducer from './favoritesSlice';
import filtersReducer from './filtersSlice';

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ['favoriteList'],
};

const favoritesPersistedReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    catalog: contactsReducer,
    camperInfo: camperInfoReducer,
    favorites: favoritesPersistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
