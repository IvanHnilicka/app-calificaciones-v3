import { Evaluacion } from "./evaluacion.interface";

export interface Materia {
    nombre: string,
    evaluaciones: Evaluacion[]
}