
export enum SepulcaPropertyType {
    Warm = 'Теплая',
    Soft = 'Мягкая',
    Square = 'Квадратная',
}



export const PropertyToId = (property: SepulcaPropertyType) => {
    switch (property) {
        case SepulcaPropertyType.Warm: return 1;
        case SepulcaPropertyType.Soft: return 2;
        case SepulcaPropertyType.Square: return 3;
    }
}

export const idToProperty = (id: number) => {
    switch (id) {
        case 1: return SepulcaPropertyType.Warm;
        case 2: return SepulcaPropertyType.Soft;
        case 3: return SepulcaPropertyType.Square;
    }

    return SepulcaPropertyType.Soft;
}

export const stringToProperty = (value: any): SepulcaPropertyType => {
    switch (value) {
        case 'Теплая': return SepulcaPropertyType.Warm;
        case 'Мягкая': return SepulcaPropertyType.Soft;
        case 'Квадратная': return SepulcaPropertyType.Square;
    }

    return SepulcaPropertyType.Warm;
}