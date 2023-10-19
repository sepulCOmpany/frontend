export enum SepulcaSize {
    XS = 'XS',
    S = 'S',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL',
    XXXL = 'XXXL',
}


export const SizeToId = (size: SepulcaSize) => {
    switch (size) {
        case SepulcaSize.XS: return 1;
        case SepulcaSize.S: return 2;
        case SepulcaSize.L: return 3;
        case SepulcaSize.XL: return 4;
        case SepulcaSize.XXL: return 5;
        case SepulcaSize.XXXL: return 6;
    }
}

export const IdToSize = (id: number) => {
    switch (id) {
        case 1: return SepulcaSize.XS;
        case 2: return SepulcaSize.S;
        case 3: return SepulcaSize.L;
        case 4: return SepulcaSize.XL;
        case 6: return SepulcaSize.XXXL;
    }

    return SepulcaSize.L;
}

export const stringToSize = (value: string): SepulcaSize => {
    switch (value) {
        case 'XS': return SepulcaSize.XS;
        case 'S': return SepulcaSize.S;
        case 'L': return SepulcaSize.L;
        case 'XL': return SepulcaSize.XL;
        case 'XXL': return SepulcaSize.XXL;
        case 'XXXL': return SepulcaSize.XXXL;
    }

    return SepulcaSize.XS;
}