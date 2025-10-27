class Persona {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  toString() {
    return `${this.nombre}, ${this.edad} años, vive en ${this.ciudad}`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, ciudad, carrera, semestre) {
    super(nombre, edad, ciudad);
    this.carrera = carrera;
    this.semestre = semestre;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }

  toString() {
    return super.toString() + ` - Estudiante de ${this.carrera}, semestre ${this.semestre}`;
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, ciudad, especialidad, experiencia) {
    super(nombre, edad, ciudad);
    this.especialidad = especialidad;
    this.experiencia = experiencia;
  }

  enseñar() {
    console.log(`${this.nombre} enseña ${this.especialidad}.`);
  }

  toString() {
    return super.toString() + ` - Profesor de ${this.especialidad}, ${this.experiencia}` 
      + ` años de experiencia`;
  }
}

function mostrarPersonas(arr) {
  arr.forEach(p => console.log(p.toString()));
}
































































































