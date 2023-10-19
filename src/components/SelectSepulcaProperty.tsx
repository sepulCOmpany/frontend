import { InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { SepulcaPropertyType, stringToProperty } from "../entities/sepulca/SepulcaPropertyType";

interface IProps {
    defaultProperty: SepulcaPropertyType;
    onChangeProperty: (sepulcaPropertyType: SepulcaPropertyType) => void;
}
export const SelectSepulcaProperty: FC<IProps> = ({defaultProperty, onChangeProperty}) => {
    return (<>
        <InputLabel id="property-id">Свойство</InputLabel>
        <Select
            labelId="property-id"
            id="property-select-id"
            value={defaultProperty}
            label="Property"
            onChange={e => onChangeProperty(stringToProperty(e.target.value))}>
            {Object
                .values(SepulcaPropertyType)
                ?.map(property => <MenuItem value={property}>{property}</MenuItem>)}
        </Select>
    </>);
}