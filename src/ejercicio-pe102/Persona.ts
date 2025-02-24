
/**
 * Clase que representa los datos de una persona
 * @module
 * @class Persona
 * @example
 * const song: Song = new Song("Carlos", "Monzoa", new Date(200, 03, 03), "JetudoDotujeTu", Ecuador);
 */
export abstract class Persona {
    // Atributos privados, accesibles solo mediante getters y setters
    private nombre: string;
    private apellidos: string;
    // Date: año, mes , dia
    private fechaNacimiento: Date;
    private apodo: string;
    private pais: string;

    /**
     * 
     * @param nombre - Nombre de la persona
     * @param apellidos - Apelledos de la persona
     * @param fechaNacimiento - Fecha de nacimiento de la persona
     * @param apodo - apodo de una persona
     * @param pais - pais de nacimiento de una persona
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, apodo: string, pais: string) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.fechaNacimiento = fechaNacimiento;
      this.apodo = apodo;
      this.pais = pais;
    }
  
    // Getters y setters para acceder y modificar los atributos privados
    public getNombre(): string {
      return this.nombre;
    }
    /**
     * 
     * @param nombre - Nombre de la persona
     */
    public setNombre(nombre: string): void {
      this.nombre = nombre;
    }
    
    /**
     * 
     * @returns appeliido
     */
    public getApellidos(): string {
      return this.apellidos;
    }
    
    /**
     * 
     * @param apellidos 
     */
    public setApellidos(apellidos: string): void {
      this.apellidos = apellidos;
    }
  
    public getFechaNacimiento(): Date {
      return this.fechaNacimiento;
    }
  
    public setFechaNacimiento(fechaNacimiento: Date): void {
      this.fechaNacimiento = fechaNacimiento;
    }

    public getApodo(): string {
      return this.apodo;
    }

    public setApodo(apodo: string): void {
      this.apodo = apodo;
    }

    public getPais(): string {
      return this.pais;
    }
    
    public setPais(pais: string): void {
      this.pais = pais;
    }
    // Método abstracto para mostrar datos personales, será implementado en las subclases
    abstract mostrarDatos(): string;
}