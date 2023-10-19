import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../entities/IUser";

export interface GrimzikState {
    grimziks: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: GrimzikState = {
    grimziks: [],
    isLoading: false,
    error: ''
}

export const grimzikSlice = createSlice({
    name: 'grimzik',
    initialState,
    reducers: {
        grimziksFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.grimziks = action.payload;
        }
    }
})

export default grimzikSlice.reducer;