import { InputLabel, MenuItem, Select } from "@mui/material";
import { FC, useEffect } from "react";
import { IUser } from "../entities/IUser";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchGrimziks } from "../store/reducers/api";
import { GrimzikState } from "../store/reducers/GrimzikSlice";

interface IProps {
    defaultGrimzik: IUser | null;
    onChangeGrimzik: (user: IUser) => void;
}

export const SelectGrimzik: FC<IProps> = ({ defaultGrimzik, onChangeGrimzik }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGrimziks());
    }, [true])

    const grimzikState: GrimzikState = useAppSelector(state => state.grimzikReducer);

    return (<>
        <InputLabel id="grimzik-id">Гримзик</InputLabel>
        <Select
            labelId="grimzik-id"
            id="grimzik-select-id"
            value={defaultGrimzik?.username}
            label="Grimzik"
            onChange={e => onChangeGrimzik(grimzikState.grimziks.filter(grimzik => grimzik.username == e.target.value)[0])}
        >
            {grimzikState.grimziks?.map(grimzik => <MenuItem value={grimzik.username}>
                {grimzik.username}
            </MenuItem>)}
        </Select>
    </>)
}