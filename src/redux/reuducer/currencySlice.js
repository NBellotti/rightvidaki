import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: {},
};

export const currencySlice = createSlice({
    name: "CurrentCurrency",
    initialState,
    reducers: {
        setCurrentCurrency: (state, action) => {
            state.currency = action.payload;
        },
        resetCurrentCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export default currencySlice.reducer;
export const { setCurrentCurrency,resetCurrentCurrency } = currencySlice.actions;

export const CurrentCurrencyData = createSelector(
    (state) => state.CurrentCurrency,
    (CurrentCurrency) => CurrentCurrency.currency
);
