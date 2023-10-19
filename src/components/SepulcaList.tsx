import { FC } from "react";
import { SepulcaModel } from "../entities/sepulca/SepulcaModel";
import { SepulcaType } from "../entities/sepulca/SepulcaType";
import { Sepulca } from "./Sepulca";

interface IProps {
    header: string;
    sepulcasType: SepulcaType;
    sepulcas: SepulcaModel[]
}

export const SepulcaList: FC<IProps> = ({ header, sepulcasType, sepulcas }) => (
    <div className="SepulcaListSection">
        <h1>{header}</h1>
        <section className="SepulcaList">
            {sepulcas?.map(sepulca => (<Sepulca sepulca={sepulca} type={sepulcasType} ></Sepulca>))}
        </section>
    </div>
);