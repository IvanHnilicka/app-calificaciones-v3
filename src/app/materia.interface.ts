interface Evaluacion {
    nombre: string,
    calificacion: number,
    valor: number
}

export interface Materia {
    nombre: string,
    evaluaciones: Evaluacion[]
}