import { Button } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { Role, stringToRole } from "../entities/Role";
import { SepulcaModel } from "../entities/sepulca/SepulcaModel";
import { idToProperty, SepulcaPropertyType } from "../entities/sepulca/SepulcaPropertyType";
import { SepulcaType } from "../entities/sepulca/SepulcaType";
import { useAppSelector } from "../hooks";
import { SelectGrimzik } from "./SelectGrimzik";
import { SelectSepulcaProperty } from "./SelectSepulcaProperty";
import { SelectSepulcaSize } from "./SelectSepulcaSize";
import { IdToSize as idToSize, SepulcaSize } from "../entities/sepulca/SepulcaSize";

interface IProps {
    type: SepulcaType;
    sepulca: SepulcaModel;
}

export const Sepulca: FC<IProps> = ({ type, sepulca }) => {
    const authState = useAppSelector(state => state.authReducer);
    const [size, setSize] = useState(idToSize(sepulca.sizeId));
    const [property, setProperty] = useState(idToProperty(sepulca.sepulcaPropertyId));
    const [grimzik, setGrimzik] = useState(sepulca.grimzik);

    let button: ReactNode = null;
    if (type === SepulcaType.Sorting) {
        if (authState.role === Role.Fufelnica) {
            if (idToProperty(sepulca.sepulcaPropertyId) === SepulcaPropertyType.Square)
                button = <Button variant="outlined">Катить</Button>
        }
        else {
            button = <Button variant="outlined">Отправить вертолетом</Button>
        }
    }

    console.log(stringToRole(authState.role) === Role.Grimzik
        && type === SepulcaType.Conveyor
        && (size === SepulcaSize.XXL || size === SepulcaSize.XXXL));
    console.log(type, size, authState.role);

    return (<div className="Sepulca">
        <p>Шмурдик: {sepulca.shmurdik.username}</p>

        <SelectGrimzik
            defaultGrimzik={grimzik}
            onChangeGrimzik={grimzik => {
                setGrimzik(grimzik);
            }}></SelectGrimzik>

        <SelectSepulcaProperty
            defaultProperty={property}
            onChangeProperty={setProperty} />

        <SelectSepulcaSize
            defaultSize={size}
            onSizeChange={setSize}
        />

        <Button sx={{position: 'inherit'}} variant="outlined">Отправить пешком</Button>
        {/* {stringToRole(authState.role) === Role.Grimzik
            && type === SepulcaType.Conveyor
            && (size === SepulcaSize.XXL || size === SepulcaSize.XXXL)
            && <Button variant="outlined">Отправить пешком</Button>}
        {button} */}
    </div>);
}