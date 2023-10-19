export enum Role {
    Grimzik = 'Грымзик',
    Shmurdik = 'Шмурдик',
    Fufelnica = 'Фуфельница'
}


export const roleToNumber = (role: Role) => {
    switch (role) {
        case Role.Grimzik: return 2;
        case Role.Shmurdik: return 1;
        case Role.Fufelnica: return 3;
    }
}

export const stringToRole = (value: string): Role => {
    switch (value) {
        case 'Грымзик': return Role.Grimzik;
        case 'Шмурдик': return Role.Shmurdik;
        case 'Фуфельница': return Role.Fufelnica;
    }

    return Role.Grimzik;
}