// CREATE TABLE sepulcas
// (
//     id                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     size_id           INT references sizes (id) NOT NULL,
//     shmurdik_id       INT references roles (id) NOT NULL,
//     grimzik_id        INT references roles (id) NOT NULL,
//     is_vaccinated     BOOL,
//     is_rubbered       BOOL,
//     delivery_state_id INT REFERENCES delivery_states (id) DEFAULT NOT NULL
// );

export interface SepulcaDto {
    sizeId: number;
    shmurdikId: number;
    grimzikId: number;
    sepulcaPropertyId: number;
}
