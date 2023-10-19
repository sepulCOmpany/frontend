import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { login } from "../store/reducers/api";
import { getCurrentUser } from "../store/reducers/AuthSlice";
import '../styles/login.css';

const Login: FC<{}> = () => {
    const { register, handleSubmit } = useForm();
    const authState = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (authState.loggedIn) {
            navigate('/kanban');
        }
    }, [authState.loggedIn]);

    const onSubmit = (formData: FieldValues) => {
        dispatch(login(formData.username, formData.password))
    }

    return (<div className="register">
        <div className="title">
            Вход
        </div>
        <form onSubmit={handleSubmit(e => onSubmit(e))}>
            <div className="field">
                <input {...register("username")} type="text" required />
                <label>Username</label>
            </div>
            <div className="field">
                <input {...register("password")} type="password" required />
                <label>Password</label>
            </div>
            <div className="content">
            </div>
            <div className="field">
                <input type="submit" value="Войти" />
            </div>
            <div className="signup-link">
                Еще не член? <a href="/register">Зарегистрироваться</a>
            </div>
        </form>
    </div>)
}

export default Login;