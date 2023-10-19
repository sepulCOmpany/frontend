import { InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { SepulcaSize, stringToSize } from "../entities/sepulca/SepulcaSize";

interface IProps {
    defaultSize: SepulcaSize;
    onSizeChange: (size: SepulcaSize) => void;
}

export const SelectSepulcaSize: FC<IProps> = ({ defaultSize, onSizeChange }) => {
    return (<>
        <InputLabel id="size-id">Размер</InputLabel>
        <Select
            labelId="size-id"
            id="grimzik-select-id"
            value={defaultSize}
            label="Size"
            onChange={e => onSizeChange(stringToSize(e.target.value))}
        >
            {Object
                .keys(SepulcaSize)
                .filter(x => typeof x === 'string')
                ?.map(size => <MenuItem value={size}>{size}</MenuItem>)}
        </Select>
    </>)
}