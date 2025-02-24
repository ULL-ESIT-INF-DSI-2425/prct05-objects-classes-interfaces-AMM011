import { describe, test, expect, beforeEach } from 'vitest';
import { Estudiante } from '../src/ejercicio-pe102/Estudiante';
import { Profesor } from '../src/ejercicio-pe102/Profesor';
import { Asignatura } from '../src/ejercicio-pe102/Asignatura';

// Creamos los profesores y estudiantes
let profesor1: Profesor;
let profesor2: Profesor;
let estudiante1: Estudiante;
let estudiante2: Estudiante;
// Ahora la asigntura
let asignatura: Asignatura;

// Para que en cada prueba se reinicie los valores
beforeEach(() => {
  profesor1 = new Profesor('Ana', 'García', new Date(1980, 5, 15), 'ProfeAna', 'España', 'ana@ull.edu.es', 'Lunes 10-12', 'Matemáticas', 'Lunes y Miércoles');
  profesor2 = new Profesor('Luis', 'Pérez', new Date(1975, 3, 10), 'ProfeLuis', 'España', 'luis@ull.edu.es', 'Miércoles 10-12', 'Física', 'Martes y Jueves');

  estudiante1 = new Estudiante('Carlos', 'Monzoa', new Date(2000, 3, 3), 'Jetudo', 'Ecuador', 'carlos@ull.edu.es', 8.5, '3º Ingeniería');
  estudiante2 = new Estudiante('María', 'Lopez', new Date(1999, 7, 20), 'Mari', 'España', 'maria@ull.edu.es', 9.0, '4º Ingeniería');

  asignatura = new Asignatura('MAT101', 'Álgebra Lineal', 'Grado en Matemáticas', [profesor1], [[estudiante1, 8.5]]);
});

describe('Asignatura Tests', () => {
  test('debería agregar un nuevo profesor a la asignatura', () => {
    asignatura.agregarProfesor(profesor2);
    expect(asignatura.mostrarProfesores()).toContain(profesor2.mostrarDatos());
  });

  test('debería agregar un nuevo estudiante a la asignatura', () => {
    asignatura.agregarEstudiante(estudiante2, 9.0);
    expect(asignatura.mostrarEstudiantes()).toContain(estudiante2.mostrarDatos());
  });

  test('debería mostrar los datos de todos los profesores', () => {
    expect(asignatura.mostrarProfesores()).toContain(profesor1.mostrarDatos());
  });

  test('debería mostrar los datos de todos los estudiantes', () => {
    expect(asignatura.mostrarEstudiantes()).toContain(estudiante1.mostrarDatos());
  });

  test('debería buscar un profesor por nombre', () => {
    const resultado = asignatura.buscarProfesor('Ana');
    expect(resultado).toContain(profesor1);
  });

  test('debería buscar un estudiante por correo institucional', () => {
    const resultado = asignatura.buscarEstudiante('carlos@ull.edu.es');
    expect(resultado).toContain(estudiante1);
  });

  test('debería obtener estudiantes con una calificación concreta', () => {
    asignatura.agregarEstudiante(estudiante2, 9.0);
    const resultado = asignatura.obtenerEstudiantesPorCalificacion(9.0);
    expect(resultado).toContain(estudiante2);
  });
});
