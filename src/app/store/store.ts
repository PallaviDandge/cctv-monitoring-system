import { configureStore } from '@reduxjs/toolkit';
import { incidentsApi } from '../components/incidentApi';

export const store = configureStore({
  reducer: {
    [incidentsApi.reducerPath]: incidentsApi.reducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(incidentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
