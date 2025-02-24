import { Persona } from "./Persona";

// Clase Estudiante que hereda de Persona
export class Estudiante extends Persona {
    private correoInstitucional: string;
    private notaDeCorte: number;
    private curso: string;
    
    /**
     * 
     * @param nombre - Nombre del estudiante
     * @param apellidos - Apellidos del estudiante
     * @param fechaNacimiento - Fecha de nacimeitno del estudiante
     * @param apodo - Apodo del estudiante
     * @param pais - País del estudiante
     * @param correoInstitucional - Correo institucional del estudiante
     * @param notaDeCorte - Nota de corte del estudiante
     * @param curso - Curso del estudiante
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, apodo: string, pais: string, correoInstitucional: string, notaDeCorte: number, curso: string) {
      super(nombre, apellidos, fechaNacimiento, apodo, pais);
      this.correoInstitucional = correoInstitucional;
      this.notaDeCorte = notaDeCorte;
      this.curso = curso;
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
     * 
     * @param correo - El correo institucional
     */
    public setCorreoInstitucional(correo: string): void {
      this.correoInstitucional = correo;
    }
    
    /***
     * Getter
     * 
     * @returns - La nota de corte
     */
    public getNotaDeCorte(): number {
        return this.notaDeCorte;
    }

    /**
     * @param notaDeCorte - La nota de corte
     */
    public setNotaDeCorte(notaDeCorte: number): void {
        this.notaDeCorte = notaDeCorte;
    }

    /**
     * 
     * @returns - Curso del estudiante
     */
    public getCurso(): string {
        return this.curso;
    }

    /**
     * 
     * @param curso - Curso del estudiante
     */
    public setCurso(curso: string): void {
        this.curso = curso;
    }
  
    /**
     * 
     * @returns - Los datos del estudiante
     */
    public mostrarDatos(): string {
      return `Estudiante: ${this.getNombre()} ${this.getApellidos()}\nCorreo: ${this.getCorreoInstitucional()} \nApodo: ${this.getApodo()} \nPaís de nacimiento: ${this.getPais()} \nNote de Corte: ${this.getNotaDeCorte()} \nCurso: ${this.getCurso()}`;
    }
  }