import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFilter = (state) => state.filter;

/* Фільтрація контактів (з мемоізацією) */
export const selectVisibleCars = createSelector(
  // Масив вхідних селекторів
  [selectCars, selectFilter],
  // Функція перетворювач
  (cars, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleCars = cars.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleCars;
  }
);
