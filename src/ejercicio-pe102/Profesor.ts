import { Persona } from "./Persona";

// Clase Profesor que hereda de Persona
export class Profesor extends Persona {
    private correoInstitucional: string;
    private horarioTutorias: string;
    private asignatura: string;
    private clases: string;
    
    /**
     * 
     * @param nombre - Nombre del profesor
     * @param apellidos - Apellidos del profesor
     * @param fechaNacimiento - Fecha de nacimeitno del profesor
     * @param apodo - Apodo del profesor
     * @param pais - País del profesor
     * @param correoInstitucional - Correo institucional del profesor
     * @param horarioTutorias - Horario de tutorías del profesor
     * @param asignatura - Asignatura del profesor
     * @param clases - Dias que imparte clases el profesor
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, apodo: string, pais: string, correoInstitucional: string, horarioTutorias: string, asignatura: string, clases: string) {
      super(nombre, apellidos, fechaNacimiento, apodo, pais);
      this.correoInstitucional = correoInstitucional;
      this.horarioTutorias = horarioTutorias;
      this.asignatura = asignatura;
      this.clases = clases;
    }
  
    /**
     * Getter
     * 
     * @returns - El correo institucional
     */
    public getCorreoInstitucional(): string {
      return this.correoInstitucional;
    }
    
    /**
     * Setter
     * 
     * @param correo - El correo institucional
     */
    public setCorreoInstitucional(correo: string): void {
      this.correoInstitucional = correo;
    }
  
    /**
     * Getter
     * 
     * @returns - El horario de tutorías
     */
    public getHorarioTutorias(): string {
      return this.horarioTutorias;
    }
  
    /**
     * Setter
     * 
     * @param horario - El horario de tutorías
     */
    public setHorarioTutorias(horario: string): void {
      this.horarioTutorias = horario;
    }

    /**
     * Getter
     * 
     * @returns - La asignatura
     */
    public getAsignatura(): string {
        return this.asignatura;
    }

    /**
     * Setter
     * 
     * @param asignatura - La asignatura
     */
    public setAsignatura(asignatura: string): void {
        this.asignatura = asignatura;
    }

    /**
     * Getter
     * 
     * @returns - Los días que imparte clases
     */
    public getClases(): string {
        return this.clases;
    } 

    /**
     * Setter
     * 
     * @param clases - Los días que imparte clases
     */
    public setClases(clases: string): void {
        this.clases = clases;
    }
  
    /**
     * 
     * @returns - Los datos del profesor
     */
    public mostrarDatos(): string {
      return `Profesor: ${this.getNombre()} ${this.getApellidos()}\nCorreo: ${this.getCorreoInstitucional()}\nHorario Tutorías: ${this.getHorarioTutorias()} \nApodo: ${this.getApodo()} \nPaís de nacimiento: ${this.getPais()} \nHorario de tutorías: ${this.getHorarioTutorias()} \nAsigantura: ${this.getAsignatura()} \nDías que imparte clases: ${this.getClases()}`;
    }
  }