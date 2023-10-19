import { Fade, InputLabel, Link, Menu, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { Navigate, useNavigate } from "react-router-dom";
import { Role, stringToRole } from "../entities/Role";
import { useAppDispatch, useAppSelector } from "../hooks";
import { register as authRegister } from "../store/reducers/api";
import { getCurrentUser } from "../store/reducers/AuthSlice";
import '../styles/login.css';

const Register: FC<{}> = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();
    const authState = useAppSelector(state => state.authReducer);
    const [role, setRole] = useState(Role.Grimzik);

    const handleChange = (event: SelectChangeEvent) => {
        setRole(stringToRole(event.target.value));
    };

    const onSubmit = (formData: FieldValues) => {
        dispatch(authRegister(formData.username, formData.password, role))
    }

    if (authState.loggedIn) {
        return <Navigate to="/kanban"></Navigate>
    }

    return (<div className="register">
        <div className="title">
            Регистрация
        </div>
        <form action="#" onSubmit={handleSubmit(e => onSubmit(e))}>
            <div className="field">
                <input {...register("username")} type="text" required />
                <label>Username</label>
            </div>
            <div className="field">
                <input {...register("password")} type="password" required />
                <label>Password</label>
            </div>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={handleChange}
            >
                <MenuItem value={Role.Grimzik}>{Role.Grimzik}</MenuItem>
                <MenuItem value={Role.Shmurdik}>{Role.Shmurdik}</MenuItem>
                <MenuItem value={Role.Fufelnica}>{Role.Fufelnica}</MenuItem>
            </Select>
            <div className="content">
            </div>
            <div className="field">
                <input type="submit" value="Зарегистрировать" />
            </div>
            <div className="signup-link">
                Уже член? <a href='/login'>Войти</a>
            </div>
        </form>
    </div>)
}

export default Register;