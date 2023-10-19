import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { FC, useState } from "react";
import { IUser } from "../entities/IUser";
import { PropertyToId, SepulcaPropertyType } from "../entities/sepulca/SepulcaPropertyType";
import { SepulcaSize, SizeToId } from "../entities/sepulca/SepulcaSize";
import { useAppSelector } from "../hooks";
import { createSepulca } from "../store/reducers/api";
import { SelectGrimzik } from "./SelectGrimzik";
import { SelectSepulcaProperty } from "./SelectSepulcaProperty";
import { SelectSepulcaSize } from "./SelectSepulcaSize";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateSepulcaDialog: FC<IProps> = ({ isOpen, onClose }) => {
    const authState = useAppSelector(state => state.authReducer);
    const [size, setSize] = useState(SepulcaSize.L);
    const [property, setProperty] = useState(SepulcaPropertyType.Soft);
    const [grimzik, setGrimzik] = useState<IUser | null>(null);
    const handleCreate = () => {
        createSepulca({
            sizeId: SizeToId(size),
            shmurdikId: authState.id,
            grimzikId: grimzik?.id ?? 0,
            sepulcaPropertyId: PropertyToId(property)
        });
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Создание сепульки</DialogTitle>
            <DialogContent>
                <SelectSepulcaSize defaultSize={size} onSizeChange={setSize} ></SelectSepulcaSize>
                <SelectGrimzik defaultGrimzik={grimzik} onChangeGrimzik={setGrimzik}></SelectGrimzik>
                <SelectSepulcaProperty defaultProperty={property} onChangeProperty={setProperty} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleCreate()}>Создать</Button>
            </DialogActions>
        </Dialog>);
}