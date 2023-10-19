import { IUser } from "../IUser";
import { SepulcaPropertyType } from "./SepulcaPropertyType";
import { SepulcaSize } from "./SepulcaSize";

export interface SepulcaModel {
    sepulcaId: number;
    deliveryStateId: number;
    sepulcaPropertyId: number;
    sizeId: number;
    shmurdik: IUser;
    grimzik: IUser;
    isVaccinated: boolean;
    isRubbered: boolean;
}