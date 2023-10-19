import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SepulcaModel } from "../../entities/sepulca/SepulcaModel";

export interface SepulcaState {
    sepulcas: SepulcaModel[];
    isLoading: boolean;
    error: string;
}

const initialState: SepulcaState = {
    sepulcas: [],
    isLoading: false,
    error: ''
}

export const sepulcaSlice = createSlice({
    name: 'grimzik',
    initialState,
    reducers: {
        sepulcasFetchingSuccess(state, action: PayloadAction<SepulcaModel[]>) {
            state.isLoading = false;
            state.error = '';
            state.sepulcas = action.payload;
        }
    }
})

export default sepulcaSlice.reducer;