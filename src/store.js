import { configureStore } from '@reduxjs/toolkit'
import { reHydrateStore,localStorageMiddleware } from './features/users/userSlice';
import usersReducer from './features/users/userSlice';


export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})