import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../entities/IAuthResponse";
import { Role } from "../../entities/Role";

interface AuthState {
    id: number;
    username: string;
    role: Role;
    loggedIn: boolean;
}

export const getCurrentUser = (): AuthState | null => {
    let auth = localStorage.getItem('auth');
    return auth ? JSON.parse(auth) : null;
}

const initialState: AuthState = getCurrentUser() ?? {
    id: 0,
    username: '',
    role: Role.Grimzik,
    loggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuthResponse>) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.loggedIn = true;
            localStorage.setItem('auth', JSON.stringify(state));
        },
        register(state, action: PayloadAction<IAuthResponse>) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.loggedIn = true;
            localStorage.setItem('auth', JSON.stringify(state));
        },
        logout(state) {
            state.username = '';
            state.role = Role.Grimzik;
            state.loggedIn = false;
            localStorage.clear();
        },
        fail(state) {
            state.username = ''
            state.role = Role.Grimzik;
            state.loggedIn = false;
            localStorage.clear();
        }
    }
})

export default authSlice.reducer;