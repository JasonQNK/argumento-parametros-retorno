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
// let valorHora = Number(prompt("Ingrese el valor de la hora: ");
// let cantidadHoras = Number(prompt("Ingrese la cantidad de horas: ");
// calcularSalarioEmpleado(valorHora,cantidadHoras)
// definirHoraExtra(cantidadHoras);
/* 
  parseInt, parseFloat o Number
  parseInt: Convierte cualquier valor ingresado a numero, pero elimina la posición decimal
  parseFloat: Convierte cualquier valor ingresado a numero
  Number: Convierte cualquier valor ingresado a numero
*/

function iniciarSistemaNominaEmpleado() {
  const VALOR_HORA = Number(prompt("Ingrese el valor de la hora: "));
  const LIMITE_HORAS = Number(prompt("Ingrese el limite de horas ordinarias"));
  const SALARIO_MINIMO = Number(prompt("Ingrese el SMMLV"));
  const AUXILIO_TRANSPORTE = Number(prompt("Ingrese el valor por auxilio de transporte"))

  if (isNaN(VALOR_HORA) || isNaN(LIMITE_HORAS)) {
    console.log("Debe ingresar solo valores numéricos");
  } else {
    let repetir = true;
    while (repetir) {
      let cantidadHoras = Number(prompt("Ingrese la cantidad de horas trabajadas"));
      if (isNaN(cantidadHoras)) {
        console.log("La cantidad de horas debe ser en numeros");
      } else if (cantidadHoras < 24) {
        console.log("El empleado no puede trabajar menos de 24 horas");
      }
      let opcion = Number(prompt(
        "Seleccione:\n1 - Calcular un salario\n2 - Finalizar sistema",
      ));
      if (opcion == 2) {
        repetir = false;
      } else {
        let salarioBrutoEmpleado = calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS);
        let valorHorasExtras = calcularValorHoraExtraEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS)
        let valorAuxilioTransporte = calcularAuxilioTransporteEmpleado(salarioBrutoEmpleado, SALARIO_MINIMO, AUXILIO_TRANSPORTE)
        let valorDeducciones = calcularDeduccionesEmpleado(salarioBrutoEmpleado)
        let salarioNetoEmpleado = calcularSalarioNetoEmpleado(salarioBrutoEmpleado, valorHorasExtras, valorAuxilioTransporte, valorDeducciones)
        mostrarColillaPagoEmpleado(salarioBrutoEmpleado, valorHorasExtras, valorAuxilioTransporte, valorDeducciones, salarioNetoEmpleado)
      }
    }
  }
}

function calcularSalarioNetoEmpleado(salarioBrutoEmpleado, valorHorasExtras, valorAuxilioTransporte, valorDeducciones) {
  return salarioBrutoEmpleado - valorDeducciones + valorHorasExtras + valorAuxilioTransporte
}

function calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS) {
  let salarioEmpleado = 0;
  if (cantidadHoras > LIMITE_HORAS) {
    salarioEmpleado = VALOR_HORA * LIMITE_HORAS;
  } else {
    salarioEmpleado = VALOR_HORA * cantidadHoras;
  }
  return salarioEmpleado
}

function calcularValorHoraExtraEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS) {
  let valorHorasExtras = 0
  let cantidadExtras = 0
  if (cantidadHoras > LIMITE_HORAS) {
    cantidadExtras = cantidadHoras - LIMITE_HORAS
    valorHorasExtras = cantidadExtras * 0.25 * VALOR_HORA
    console.log("El empleado trabajó estas horas extras: " + cantidadExtras)
  } else {
    valorHorasExtras = 0
  }
  return valorHorasExtras
}

function calcularAuxilioTransporteEmpleado(salarioBrutoEmpleado, SALARIO_MINIMO, AUXILIO_TRANSPORTE) {
  if (salarioBrutoEmpleado > SALARIO_MINIMO * 2) {
    return 0
  } else {
    return AUXILIO_TRANSPORTE
  }
}

function calcularDeduccionesEmpleado(salarioBrutoEmpleado) {
  return salarioBrutoEmpleado * 0.08
}

function mostrarColillaPagoEmpleado(salarioBrutoEmpleado, valorHorasExtras, valorAuxilioTransporte, valorDeducciones, salarioNetoEmpleado) {
  console.log("*************Colila de Pago del Empleado*************")
  console.log("El salario Bruto es: " + salarioBrutoEmpleado)
  console.log("El auxilio de transporte es: " + valorAuxilioTransporte)
  console.log("El valor de deducciones es: " + valorDeducciones)
  console.log("El valor por horas extras es: " + valorHorasExtras)
  console.log("El Salario neto es: " + salarioNetoEmpleado)
}

iniciarSistemaNominaEmpleado();