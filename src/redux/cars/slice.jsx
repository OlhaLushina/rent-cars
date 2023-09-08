import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCars,
} from './operations';

/* Редюсер при запиті */
const pendingReducer = state => {
  state.isLoading = false;
};

/* Редюсер при помилці */
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

/* Редюсер успішного отримання списку авто */
const fetchCarsFullfieldReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const carsSlice = createSlice({
  // Ім'я слайсу
  name: 'cars',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів, що оброблює зовнішні екшени
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, pendingReducer)
      .addCase(fetchCars.fulfilled, fetchCarsFullfieldReducer)
      .addCase(fetchCars.rejected, rejectedReducer)
});

// Експорт редюсера
export const carsReducer = carsSlice.reducer;
