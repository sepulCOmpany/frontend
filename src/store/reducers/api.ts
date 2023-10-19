import axios from "axios";
import { IAuthResponse } from '../../entities/IAuthResponse';
import { IUser } from "../../entities/IUser";
import { Role, roleToNumber } from "../../entities/Role";
import { SepulcaDto } from "../../entities/sepulca/SepulcaCreateModel";
import { SepulcaModel } from "../../entities/sepulca/SepulcaModel";
import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";
import { grimzikSlice } from "./GrimzikSlice";
import { sepulcaSlice } from "./SepulcaSlice";

const API_URL = 'https://sepulcompanybackend.onrender.com';

export const fetchGrimziks = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IUser[]>(API_URL + '/grimziks');
        dispatch(grimzikSlice.actions.grimziksFetchingSuccess(response.data))
    }
    catch (e) {
    }
}

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IAuthResponse>(API_URL + '/login', {
            username,
            password
        });
        dispatch(authSlice.actions.login(response.data))
    }
    catch (e) {
        dispatch(authSlice.actions.fail())
    }
}

export const register = (username: string, password: string, role: Role) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IAuthResponse>(API_URL + '/register', { username, password, roleId: roleToNumber(role) });
        dispatch(authSlice.actions.register({
            id: response.data.id,
            role: role,
            username: username
        }));
    }
    catch (e) {
        dispatch(authSlice.actions.fail())
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.logout());
}

export const createSepulca = async (sepulcaCreateModel: SepulcaDto) => {
    try {
        await axios.post(API_URL + '/sepulca', sepulcaCreateModel);
    }
    catch (e) {
    }
}

export const fetchSepulcas = () => async (dispatch: AppDispatch) => {
    try {
        const sepulcas = await axios.get<SepulcaModel[]>(API_URL + '/sepulcas');
        dispatch(sepulcaSlice.actions.sepulcasFetchingSuccess(sepulcas.data))
    } catch (e) {

    }
}

export const putSepulca = (sepulca: SepulcaDto) => async (dispatch: AppDispatch) => {
    try {
        await axios.put(API_URL + '/sepulca', {
            sepulca
        });
    } catch (e) {

    }
}