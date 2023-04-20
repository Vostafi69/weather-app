import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type City = {
    name: string;
}

type CityState = {
    list: City[];
}

const initialState: CityState = {
    list: [],
}

const cityesSlice = createSlice({
    name: 'cityes',
    initialState,
    reducers: {
        addCity(state, action: PayloadAction<string>) {
            state.list.push({
                name: action.payload,
            });
        }
    }
});

export const {addCity} = cityesSlice.actions;
export default cityesSlice.reducer;