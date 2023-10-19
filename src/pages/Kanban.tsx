import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CreateSepulcaDialog } from "../components/CreateSepulcaDialog";
import { SepulcaList } from "../components/SepulcaList";
import { SepulcaType } from "../entities/sepulca/SepulcaType";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchSepulcas, logout } from "../store/reducers/api";
import '../styles/kanban.css';

const Kanban: FC<{}> = () => {
    useEffect(() => {
        dispatch(fetchSepulcas());
    }, [true])

    const dispatch = useAppDispatch();
    const [isOpenDialog, setOpenDialog] = useState(false);
    const authState = useAppSelector(state => state.authReducer);
    const sepulcaState = useAppSelector(state => state.sepulcaReducer);
    if (!authState.loggedIn) {
        return (<Navigate to="/login"></Navigate>)
    }



    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <h1>Kanban</h1>
            <Button onClick={() => setOpenDialog(true)} variant="contained">Создать сепульку</Button>
            {isOpenDialog && <CreateSepulcaDialog
                onClose={() => handleClose()}
                isOpen={isOpenDialog}></CreateSepulcaDialog>}
            <section className="Kanban">
                <SepulcaList
                    header={"Конвеер"}
                    sepulcas={sepulcaState.sepulcas?.filter(sepulca => !sepulca.isVaccinated || !sepulca.isRubbered)}
                    sepulcasType={SepulcaType.Conveyor} />
                <SepulcaList
                    header={"Сортировка"}
                    sepulcas={sepulcaState.sepulcas?.filter(sepulca => sepulca.isVaccinated && sepulca.isRubbered && sepulca.deliveryStateId == 1)}
                    sepulcasType={SepulcaType.Sorting} />
                <SepulcaList
                    header={"Доставка"}
                    sepulcas={sepulcaState.sepulcas?.filter(sepulca => sepulca.deliveryStateId == 2)}
                    sepulcasType={SepulcaType.Delivery} />
                <button onClick={() => dispatch(logout())}>logout</button>
            </section >
        </div >);
};

export default Kanban;