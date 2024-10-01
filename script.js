//INICIO PREPARACIÓN DE TODOS LOS ELMENTOS BASE DEL HTML

const divElement = document.getElementById("contenedor");
let tableElement = document.createElement("table");

divElement.append(tableElement);

let rowElement = document.createElement("tr")
let mes = document.createElement("th");
let dia = document.createElement("th");
let hora = document.createElement("th");
let minuto = document.createElement("th");
let segundo = document.createElement("th");

tableElement.append(rowElement);
rowElement.append(mes, dia, hora, minuto, segundo);

mes.innerText = "Mes";
dia.innerText = "Día";
hora.innerText = "Hora";
minuto.innerText = "Minutos";
segundo.innerText = "Segundos";

let newRowElement = document.createElement("tr")
let mesDato = document.createElement("th");
let diaDato = document.createElement("th");
let horaDato = document.createElement("th");
let minutoDato = document.createElement("th");
let segundoDato = document.createElement("th");

tableElement.append(newRowElement);
newRowElement.append(mesDato, diaDato, horaDato, minutoDato, segundoDato);

//FIN PREPARACIÓN DE TODOS LOS ELMENTOS BASE DEL HTML

/*
INTRODUCIENDO EL INPUT Y EL BOTÓN
*/

let divBotonInput = document.createElement("div");

// EL INPUT
let inputElement = document.createElement("input");
inputElement.setAttribute("id", "inputAtt")
inputElement.setAttribute("type", "text");

//BOTON  
let buttonElement = document.createElement("button");
buttonElement.addEventListener("click", actualizar);
buttonElement.innerText = "Cambiar fecha";

// PONIENDO ESTILO AL DIV DEL INPUT Y EL BOTÓN
divBotonInput.classList.add("centrado");


//AÑADO EL BOTON Y EL INPUT A LA TABLA
tableElement.append(divBotonInput);
divBotonInput.append(inputElement, buttonElement);

// DECLARO LA FECHA A ALCANZAR

let fechaLimite = new Date("2024-11-1 23:59:59");

// FUNCIÓN QUE CALCULA EL TIEMPO QUE QUEDA HASTA ALCANZARLA

function calcular() {

    //TE DA EL TIEMPO REAL
    let tiempoReal = new Date();
    // LO QUE FALTA PARA LA FECHA A ALACANZAR
    let duracion = fechaLimite - tiempoReal;

    // CON UNA CALCULADORA DE GOOGLE SE OBTIENE EL TIEMPO QUE 
    //SON UN MES, DOS SEMANAS Y UNA SEMANA
    let duracionMes = 2592000000;
    let duracionDosSemanas = 1209600000;
    let duracionUnaSemana = 604800000;

    // CÁCULOS DE CUANTO ES UN MES, DÍA, HORA, ETC...
    const milisegundos_Segundos = 1000;
    const milisegundos_Minuto = milisegundos_Segundos * 60;
    const milisegundos_Hora = milisegundos_Minuto * 60;
    const milisegundos_Día = milisegundos_Hora * 24;
    const milisegundos_Mes = milisegundos_Día * 30;

    // EL TIEMPO QUE FALTA DE CAFA DÍA, HORA, ETC...

    const meses_Restantes = Math.floor(duracion / milisegundos_Mes);
    const dias_Restantes = Math.floor((duracion % milisegundos_Mes) / milisegundos_Día);
    const horas_Restantes = Math.floor((duracion % milisegundos_Día) / milisegundos_Hora);
    const minutos_Restantes = Math.floor((duracion % milisegundos_Hora) / milisegundos_Minuto);
    const segundos_Restantes = Math.floor((duracion % milisegundos_Minuto) / milisegundos_Segundos);

    //VALIDACIÓN DE LOS COLORES Y NÚMEROS NEGATIVOS

    if (duracion <= 0) {

        mesDato.textContent = 0;
        diaDato.textContent = 0;
        horaDato.textContent = 0;
        minutoDato.textContent = 0;
        segundoDato.textContent = 0;

        mesDato.style.color = "red";
        diaDato.style.color = "red";
        horaDato.style.color = "red";
        minutoDato.style.color = "red";
        segundoDato.style.color = "red";


    } else if (duracion > duracionMes) {

        //    alert("QUEDA MAS DE UN MES");

        mesDato.style.color = "green";
        diaDato.style.color = "green";
        horaDato.style.color = "green";
        minutoDato.style.color = "green";
        segundoDato.style.color = "green";

        mesDato.textContent = meses_Restantes;
        diaDato.textContent = dias_Restantes;
        horaDato.textContent = horas_Restantes;
        minutoDato.textContent = minutos_Restantes;
        segundoDato.textContent = segundos_Restantes;

    } else if (duracion >= duracionUnaSemana) {

        //    alert("QUEDA MENOS DE 2 SEMANAS");

        mesDato.style.color = "yellow";
        diaDato.style.color = "yellow";
        horaDato.style.color = "yellow";
        minutoDato.style.color = "yellow";
        segundoDato.style.color = "yellow";

        mesDato.textContent = meses_Restantes;
        diaDato.textContent = dias_Restantes;
        horaDato.textContent = horas_Restantes;
        minutoDato.textContent = minutos_Restantes;
        segundoDato.textContent = segundos_Restantes;

    } else if (duracion < duracionUnaSemana) {

        mesDato.style.color = "red";
        diaDato.style.color = "red";
        horaDato.style.color = "red";
        minutoDato.style.color = "red";
        segundoDato.style.color = "red";

        mesDato.textContent = meses_Restantes;
        diaDato.textContent = dias_Restantes;
        horaDato.textContent = horas_Restantes;
        minutoDato.textContent = minutos_Restantes;
        segundoDato.textContent = segundos_Restantes;

    }

}

// FUNCIÓN PARA PONER UNA NUEVA FECHA
function actualizar() {
    //COGE EL VALOR DEL INPUT
    let valorInput = document.getElementById("inputAtt").value;
    let validarFecha = Date.parse(valorInput);
    //PARSEO EL VALOR DEL INPUT
    if (!isNaN(validarFecha)) {
        //  COMPRUEBO QUE VALIDAR FECHA NO ES UN NAN
        fechaLimite = new Date(validarFecha);
        calcular();
    } else {
        alert("Por favor, ingresa una fecha válida.");
    }
}

// ACTUALIZA CADA SEGUNDO Y LLAMA A LA FUNCIÓN DEL TIEMPO
window.setInterval(calcular, 1000);


