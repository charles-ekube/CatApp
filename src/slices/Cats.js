import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    errors: [],
    cats: [],
}

const url = 'https://api.thecatapi.com/v1/';
const apiKey = 'f6260ee0-d16f-4af5-9eff-a8cd263503d7';

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCats: state => {
            state.loading = true
        },
        getCatsSuccess: (state, { payload }) => {
            state.cats = payload
            state.loading = false
            state.hasErrors = false
        },
        getCatsFailure: (state, { payload }) => {
            state.loading = false
            state.hasErrors = true
            state.errors = payload
        },
    }
})

export const { getCats, getCatsSuccess, getCatsFailure } = catsSlice.actions

export const catsSelector = state => state.cats;

export default catsSlice.reducer;


export function fetchCats() {
    return async dispatch => {
        dispatch(getCats())
        try {
            const response = await fetch(`${url}breeds?attach_breed=0`, {
                headers: {
                    "x-api-key": apiKey,
                }
            })
            const data = await response.json()

            dispatch(getCatsSuccess(data))
        } catch (errors) {
            dispatch(getCatsFailure(errors))
            // console.log('e', errors)
        }
    }
}
