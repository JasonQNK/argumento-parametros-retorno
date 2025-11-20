// function calcularSalarioEmpleado(valorHora,cantidadHoras) {
//   if (isNaN(valorHora) || isNaN(cantidadHoras)) {
//     console.log("Debe ingresar los valores en números");
//   } else {
//     console.log("El salario es: " + valorHora * cantidadHoras);
//   }
// }
// function definirHoraExtra(cantidadHoras) {
//   console.log("Cantidad de horas extras: " + (cantidadHoras - 44));
// }
// let valorHora = prompt("Ingrese el valor de la hora: ");
// let cantidadHoras = prompt("Ingrese la cantidad de horas: ");
// calcularSalarioEmpleado(valorHora,cantidadHoras)
// definirHoraExtra(cantidadHoras);

function iniciarSistemaNominaEmpleado() {
  const VALOR_HORA = prompt("Ingrese el valor de la hora: ");
  const LIMITE_HORAS = prompt("Ingrese el limite de horas ordinarias");
  if (isNaN(VALOR_HORA) || isNaN(LIMITE_HORAS)) {
    console.log("Debe ingresar solo valores numéricos");
  } else {
    let repetir = true;
    while (repetir) {
      let cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas");
      if (isNaN(cantidadHoras)) {
        console.log("La cantidad de horas debe ser en numeros");
      } else if (cantidadHoras < 24) {
        console.log("El empleado no puede trabajar menos de 24 horas");
      }
      let opcion = prompt(
        "Seleccione:\n1 - Calcular un salario\n2 - Finalizar sistema",
      );
      if (opcion == 2) {
        repetir = false;
      } else {
        calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS);
      }
    }
  }
}

function calcularSalarioNetoEmpleado() {}

function calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS) {
  let salarioEmpleado = 0;
  if (cantidadHoras > LIMITE_HORAS) {
    salarioEmpleado = VALOR_HORA * LIMITE_HORAS;
  } else {
    salarioEmpleado = VALOR_HORA * cantidadHoras;
  }
  console.log("El salario es: " + salarioEmpleado);
}

function calcularValorHoraExtraEmpleado() {}
function calcularAuxilioTransporteEmpleado() {}
function calcularDeduccionesEmpleado() {}
function mostrarColillaPagoEmpleado() {}

iniciarSistemaNominaEmpleado();
