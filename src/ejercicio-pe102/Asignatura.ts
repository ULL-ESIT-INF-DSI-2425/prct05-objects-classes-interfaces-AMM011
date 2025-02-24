import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

/**
 * Tupla para controlar los datos de un alumos junto con su calificación
 */
type datos = [Estudiante, number]

// Clase Asignatura
export class Asignatura {
    private codigo: string;
    private nombre: string;
    private titulacion: string;
    private profesores: Profesor[] = [];
    private estudiantes: datos[] = [];

    /**
     * 
     * @param codigo - Codigo de la asignatura
     * @param nombre - Nombre de la asignatura
     * @param titulacion - Titutalación
     * @param profesores - Profesores que la imparten
     * @param estudiantes - Estudiantes
     */
    constructor(codigo: string, nombre: string, titulacion: string, profesores: Profesor[], estudiantes: datos[]) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.titulacion = titulacion;
        this.profesores = profesores;
        this.estudiantes = estudiantes;
    }

    /**
     * Agrega un profesor a la asignatura
     * @param profesor - Profesor que imparte la asignatura
     */
    public agregarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    /**
     * Agrega un estudiante con su calificación
     * @param estudiante - Estudiante que cursa la asignatura
     * @param calificacion - Calificación obtenida
     */
    public agregarEstudiante(estudiante: Estudiante, calificacion: number): void {
        this.estudiantes.push([estudiante, calificacion]);
    }

    /**
     * 
     * @returns - Devuelve un array con el contenido de cada profesor
     */
    public mostrarProfesores(): string[] {
        let result: string[] = [];
        this.profesores.forEach((profesor) =>{
            result.push(profesor.mostrarDatos());
        })
        return result;
    }

    /**
     * 
     * @returns - Deuvlee un array con el contenido de cada profesor
     */
    public mostrarEstudiantes(): string[] {
        let result: string[] = [];
        this.estudiantes.forEach((estudiante) => {
            result.push(estudiante[0].mostrarDatos());
        })
        return result;
    }

    /**
     * Busca profesores por nombre o correo institucional
     * @param criterio - Nombre o correo a buscar
     * @returns Lista de profesores que coinciden
     */
    public buscarProfesor(criterio: string): Profesor[] {
      return this.profesores.filter(
      // profesor por profesor
      (profesor) =>
        // Utlizamos includes para comprobar si critero se encontró
        profesor.getNombre().includes(criterio) ||
        profesor.getCorreoInstitucional().includes(criterio)
      );
    }

    /**
     * Busca estudiantes por nombre o correo institucional
     * @param criterio - Nombre o correo a buscar
     * @returns Lista de estudiantes que coinciden
    */
    public buscarEstudiante(criterio: string): Estudiante[] {
        return this.estudiantes
          .filter(
            // Iteramos sobre cada estudiante 
            ([estudiante]) =>
              // Utilizamos includes para comprobar si el criterio se encontró 
              estudiante.getNombre().includes(criterio) ||
              estudiante.getCorreoInstitucional().includes(criterio)
          )
          // Mapeamos los resultados filtrados para devolver solo los objetos estudiante
          // para obtener solo el objeto estudiante, con cada uno
          .map(([estudiante]) => estudiante);
    }

    /**
     * Obtiene estudiantes con una calificación específica
     * @param calificacion - Calificación buscada
     * @returns Lista de estudiantes con esa calificación
     */
    public obtenerEstudiantesPorCalificacion(calificacion: number): Estudiante[] {
        return this.estudiantes
            // Filtramos los estudiantes por la calificación especificada
            .filter(([_, nota]) => nota === calificacion)
            // para obtener solo el objeto estudiante, con cada uno
            .map(([estudiante]) => estudiante);
  }
}
